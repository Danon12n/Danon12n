#include <linux/module.h> 
#include <linux/kernel.h> 
#include <linux/init.h>

MODULE_LICENSE("GPL");
MODULE_AUTHOR("Nechitaylo D.V.");
MODULE_DESCRIPTION("Module Descrioption");


static int __init Module_init(void) 
{ 
   printk("Hello world!\n"); 
   return 0; 
}

static void __exit Module_exit(void) 
{ 
   printk("Goodbye\n"); 
} 

module_init(Module_init); 
module_exit(Module_exit); 