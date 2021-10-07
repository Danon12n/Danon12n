#include <linux/module.h> 
#include <linux/kernel.h> 
#include <linux/init.h>
#include <linux/sched.h>
#include <linux/init_task.h>

MODULE_LICENSE("GPL");
MODULE_AUTHOR("Nechitaylo D.V.");
MODULE_DESCRIPTION("Module Descrioption");

struct task_struct *task = &init_task;

static int __init Module_init(void) 
{ 
   printk("ModuleMsg: Module Loaded!\n"); 
   
 	do 
	{
 		printk("ModuleMsg---%s-%d, parent %s-%d", task->comm,
 		task->pid, task->parent->comm, task->parent->pid);
 	} while ((task = next_task(task)) != &init_task);
 	printk("ModuleMsg---%s-%d, parent %s-%d", current->comm,
 	current->pid, current->parent->comm, current->parent->pid);
 	return 0; 
}

static void __exit Module_exit(void) 
{ 
   printk("ModuleMsg: Module Unloaded!\n"); 
} 

module_init(Module_init); 
module_exit(Module_exit); 