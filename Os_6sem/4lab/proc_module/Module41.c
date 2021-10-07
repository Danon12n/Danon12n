#include <linux/module.h>
#include <linux/init.h>
#include <linux/kernel.h>
#include <linux/proc_fs.h>
#include <linux/string.h>
#include <linux/vmalloc.h>
#include <asm/uaccess.h>
#include <linux/uaccess.h>

#define COOKIE_BUF_SIZE PAGE_SIZE

MODULE_LICENSE("Dual BSD/GPL");
MODULE_AUTHOR("Nechitaylo D.V.");

int Module41_init(void);
ssize_t Module41_read(struct file *file, char *buf, size_t count, loff_t *f_pos);
ssize_t Module41_write(struct file *file, const char *buf, size_t count, loff_t *f_pos);
void Module41_exit(void);

struct proc_ops proc_fops = {
    .proc_read = Module41_read,
    .proc_write = Module41_write,
};

char *cookie_buf;
struct proc_dir_entry *proc_file;
unsigned int read_index;
unsigned int write_index;


int Module41_init(void)
{
    cookie_buf = vmalloc(COOKIE_BUF_SIZE);

    if (!cookie_buf)
    {
        printk(KERN_INFO "Error: can't malloc cookie buffer\n");
        return -ENOMEM;
    }

    memset(cookie_buf, 0, COOKIE_BUF_SIZE);
    proc_file = proc_create("Module41", 0666, NULL, &proc_fops);

    if (!proc_file)
    {
        vfree(cookie_buf);
        printk(KERN_INFO "Error: can't create Module41 file\n");
        return -ENOMEM;
    }

    read_index = 0;
    write_index = 0;

    proc_mkdir("Dir_fort", NULL);
    proc_symlink("Symbolic_fort", NULL, "/proc/Module41");

    printk(KERN_INFO "Module41 loaded successfully\n");
    return 0;
}


ssize_t Module41_read(struct file *file, char *buf, size_t count, loff_t *f_pos)
{
    int len;

    if (write_index == 0 || *f_pos > 0)
        return 0;

    if (read_index >= write_index)
        read_index = 0;

    len = sprintf(buf, "%s\n", &cookie_buf[read_index]);
    read_index += len;
    *f_pos += len;

    return len;
}


ssize_t Module41_write(struct file *file, const char *buf, size_t count, loff_t *f_pos)
{
    int free_space = (COOKIE_BUF_SIZE - write_index) + 1;

    if (count > free_space)
    {
        printk(KERN_INFO "Error: cookie pot is full\n");
        return -ENOSPC;
    }

    if (copy_from_user(&cookie_buf[write_index], buf, count))
        return -EFAULT;

    write_index += count;
    cookie_buf[write_index-1] = 0;

    return count;
}


void Module41_exit(void)
{
    remove_proc_entry("Module41", NULL);

    if (cookie_buf)
        vfree(cookie_buf);

    printk(KERN_INFO "Module41 unloaded\n");
}

module_init(Module41_init);
module_exit(Module41_exit);
