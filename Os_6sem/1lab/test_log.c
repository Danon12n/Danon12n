
#include <stdio.h>
#include <syslog.h>
#include <string.h>
#include <unistd.h>

int main(int argc, char *argv[]) 
{
    char *cmd;
    if ((cmd = strrchr(argv[0], '/')) == NULL)
        cmd = argv[0];
    else
        cmd++;
    printf("cmd = %s\n", cmd);

    
    while(1)
    {
        syslog(LOG_INFO,"Ищем Место с логом! Я тут!\n");
        sleep(6);
    }


    return 0;
}