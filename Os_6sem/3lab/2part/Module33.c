#include <linux/init.h> 
#include <linux/module.h> 
#include "Module.h" 

MODULE_LICENSE("GPL");
MODULE_AUTHOR("Nechitaylo D.V.");

static int __init Module32_init(void) 
{ 
   printk("ModuleMsg: Module33 Loaded!\n"); 
   printk("ModuleMsg: string exported from Module31 : %s\n", Module31_string); 
   printk("ModuleMsg: string returned Module31_proc1() is : %s\n", Module31_proc1()); 
   printk("ModuleMsg: int exported from Module31 : %d\n", Module31_int);
   printk("ModuleMsg: int returned by Module31_proc2 is : %d", Module31_proc2());
   return -1; 
} 

static void __exit Module32_exit(void) 
{ 
   printk("ModuleMsg: Module33 Unloaded!\n"); 
} 

module_init(Module32_init);
module_exit(Module32_exit);