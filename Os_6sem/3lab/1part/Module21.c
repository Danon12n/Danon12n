#include <linux/module.h> 
#include <linux/kernel.h> 
#include <linux/init.h>
#include <linux/sched.h>
#include <linux/init_task.h>

MODULE_LICENSE("GPL"); //лицензия модуля, чтобы нормально работал нужна GPL
MODULE_AUTHOR("Nechitaylo D.V."); //имя автора
MODULE_DESCRIPTION("This module for studying."); //описание

struct task_struct *task = &init_task; 

static int __init Module_init(void) //сам метод при загрузке
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

static void __exit Module_exit(void) //сам метод
{ 
   printk("ModuleMsg: Module Unloaded!\n"); 
} 

module_init(Module_init); //инициализация метода при регистрации модуля
module_exit(Module_exit); //инициализация метода при выгрузке модуля