#include <stdio.h>
#include <sys/stat.h>

int Stat(const char *restrict pathname, struct stat *restrict buf)
{
    if (stat(pathname, buf) == -1)
    {
        perror("- stat failed");
        exit(0)
    }
    return 0;
}

int main()
{
    const char *restrict pathname = "/home/bmstu/OS/2lab/test/demon.c";
    struct stat *restrict buf = null;
    Stat(pathname, buf);
    return 0;
}