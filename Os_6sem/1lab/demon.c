#include <syslog.h>
#include <stdlib.h>
#include <fcntl.h>
#include <unistd.h> //setsid
#include <stdio.h> 
#include <signal.h> //sidaction
#include <string.h> 
#include <errno.h> 
#include <pthread.h>
#include <time.h>
#include <sys/times.h>
#include <sys/file.h>
#include <sys/resource.h>
#include <sys/stat.h> //umask

#define LOCKFILE "/var/run/daemon.pid"
#define LOCKMODE (S_IRUSR | S_IWUSR | S_IRGRP | S_IROTH) 

sigset_t mask;

int lockfile(int fd)
{
    struct flock fl;
    fl.l_type = F_WRLCK;
    fl.l_start = 0;
    fl.l_whence = SEEK_SET;
    fl.l_len = 0;
    return(fcntl(fd, F_SETLK, &fl));
}


int already_running(void)
{

    syslog(LOG_INFO, "Проверка на многократный запуск.\n");

    int fd;
    char buf[16];

    fd = open(LOCKFILE, O_RDWR | O_CREAT, LOCKMODE);

    if (fd < 0)
    {
        syslog(LOG_ERR, "Невозможно открыть %s: %s!", LOCKFILE, strerror(errno));
        exit(1);
    }


    if (lockfile(fd) < 0)
    {
         if (errno == EACCES || errno == EAGAIN)
         {
             close(fd);
             return(1);
         }
         syslog(LOG_ERR, "Невозможно установить блокировку на %s: %s!", LOCKFILE, strerror(errno));
         exit(1);
    } 
    

    ftruncate(fd, 0);
    sprintf(buf, "%ld", (long)getpid());
    write(fd, buf, strlen(buf) + 1);

    return(0);
}



void daemonize(const char *cmd)
{
    int fd0, fd1, fd2;
    pid_t pid;
    struct rlimit rl;
    struct sigaction sa;

    
    // 1. Сбросить маску режима создания файла 
    umask(0);
    
    // 2. Получить максимально возможный номер дискриптора файла
    if (getrlimit(RLIMIT_NOFILE, &rl) < 0)
        syslog(LOG_ERR, "%s: невозможно получить максимальный номер дискриптора\n", cmd);
    
    // 3. Стать лидером новой сессии, чтобы утратить управляющий терминал 
    if ((pid = fork()) < 0)
        syslog(LOG_ERR, "%s: ошибка вызова функции fork.\n", cmd);
    else if (pid != 0) //родительский процесс
        exit(0);
   
    
    setsid();

    // 4. Обеспечить невозможность обретения управляющего терминала в будущем 
    sa.sa_handler = SIG_IGN;
    sigemptyset(&sa.sa_mask);
    sa.sa_flags = 0;
    if (sigaction(SIGHUP, &sa, NULL) < 0)
        syslog(LOG_ERR, "%s: невозможно игнорировать сигнал SIGHUP!\n", cmd);


    // 5. Назначить корневой каталог текущим рабочим каталогом, 
    // чтобы впоследствии можно было отмонтировать файловую систему 
    if (chdir("/") < 0)
        syslog(LOG_ERR, "%s: невозможно сделать текущим рабочим каталогом!\n", cmd);
    
    // 6. Зактрыть все открытые файловые дескрипторы 
    if (rl.rlim_max == RLIM_INFINITY)
        rl.rlim_max = 1024;
    for (int i = 0; i < rl.rlim_max; i++)
        close(i);

    // 7. Присоеденить файловые дескрипторы 0, 1, 2 к /dev/null
    fd0 = open("/dev/null", O_RDWR);
    fd1 = dup(0); //копируем файловый дискриптор
    fd2 = dup(0);

    // 8. Инициализировать файл журнала
    openlog(cmd, LOG_CONS, LOG_DAEMON);
    if (fd0 != 0 || fd1 != 1 || fd2 != 2)
    {
        syslog(LOG_ERR, "ошибочные файловые дескрипторы %d %d %d\n", fd0, fd1, fd2);
        exit(1);
    }

    syslog(LOG_WARNING, "Демон запущен");
}

void *thr_fn(void *arg)
{
    int err, signo;
    time_t t;
    struct tm *time_info;
    
    for (;;) {
        err = sigwait(&mask, &signo);
        if (err != 0) {
            syslog(LOG_ERR, "Ошибка вызова функции sigwait");
            exit(1);
        }
        switch (signo) {
        case SIGHUP:
            t = time(NULL);
            syslog(LOG_INFO, "Login = %s", getlogin());
            break;
        case SIGTERM:
           syslog(LOG_INFO, "Получен сигнал SIGTERM; выход");
            exit(0);
        default:
            syslog(LOG_INFO, "получен непредвиденный сигнал %d\n", signo);
        }   
    }
    return(0);

}

int main(int argc, char *argv[]) 
{
    int err;
    pthread_t tid;
    char *cmd;
    struct sigaction sa;
    time_t t;
    
    printf("<%s>",argv[0]);

    if ((cmd = strrchr(argv[0], '/')) == NULL)
        cmd = argv[0];
    else
        cmd++;
        
    // Перейти в режим демона
    daemonize(cmd);
    
    
    // Убедиться, что ранее не была запущена другая копия демона
    if (already_running()) {
        syslog(LOG_ERR, "Демон уже запущен");
        exit(1);
    }
    
    // Восстановить действие по умолчанию для сигнала SIGHUP и заблокировать все сигналы
    sa.sa_handler = SIG_DFL;
    sigemptyset(&sa.sa_mask);
    sa.sa_flags = 0;
    if (sigaction(SIGHUP , &sa, NULL) < 0)
        syslog(LOG_ERR, "Невозможно восстановить действие SIG_DFL для SIGHUP");
    sigfillset(&mask);
    if ((err = pthread_sigmask(SIG_BLOCK, &mask, NULL)) != 0)
        syslog(LOG_ERR, "Ошибка выполнения операции SIG_BLOCK");
    
    // Создать поток, который будет заниматься обработкой SIGHUP и SIGHTERM
    err = pthread_create(&tid, NULL, thr_fn, 0);
    if (err != 0)
        syslog(LOG_ERR, "Невозможно создать поток");
        
    while(1) 
    {
        t = time(NULL);
        syslog(LOG_INFO, "time: %s", asctime(localtime(&t)));
        sleep(10);
    }
        
    exit(0);
}
