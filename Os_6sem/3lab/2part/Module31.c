#include <linux/init.h> 
#include <linux/module.h> 
#include "Module.h" 

MODULE_LICENSE("GPL");
MODULE_AUTHOR("Nechitaylo D.V.");

char* Module31_string = "Hello world!"; 
int Module31_int = 5;

extern char* Module31_proc1(void) 
{ 
   return Module31_string; 
} 

extern int Module31_proc2(void)
{
    return Module31_int * Module31_int;
}

static char* Module31_local(void) 
{ 
   return Module31_string; 
} 

extern char* Module31_noexport(void) 
{ 
   return Module31_string; 
} 

EXPORT_SYMBOL(Module31_string);
EXPORT_SYMBOL(Module31_int); 
EXPORT_SYMBOL(Module31_proc1); 
EXPORT_SYMBOL(Module31_proc2);

static int __init Module31_init(void) 
{ 
   printk("ModuleMsg: Module31 Loaded!\n"); 
   return 0; 
} 

static void __exit Module31_exit(void) 
{ 
   printk("ModuleMsg: Module31 Unloaded!\n"); 
} 

module_init(Module31_init); 
module_exit(Module31_exit);