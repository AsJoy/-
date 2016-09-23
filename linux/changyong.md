1. 修改终端语言: `LANG=en_US`  `zh_CN.UTF-8`
2. 查看终端语言: `echo $LANG`
3. 查看时间: `date +%Y/%m/%d\ %H:%M:%S`
4. 调用计算器: `bc`  设置精确度使用scale=[number]
    ```
    This is free software with ABSOLUTELY NO WARRANTY. For details type `warranty'.
    scale=3 1/3  // 设置输出的消暑精确度
    .333 340/2349 .144
    quit
   ```
5.  查看帮助: `man page info` 或者查阅 `/usr/share/doc`
6. 关机
    1. `who` 查看当前谁在线
    2. `netstat -a` 查看网络联机状态
    3. `ps -a` 查看当前背景执行的程序
    5. `sync` 关机前讲内存中的缓存数据同步到硬盘
    4. `shutdown` 或者 `reboot` 关机或重启 unix like的操作系统可能会需要root权限
7. `shutdown -h 20:25` 定时关机 `shutdown -h +10` 10分钟后关机
8. linux目录分布遵循 [FHS 针对目录树架构](./attache/fhs-2.3.pdf)

9. `-R` 是支持文件递归操作

10. `umask` 查看用户权限 一般后三位起作用 
11. 用户管理目录分布:
    1. /etc/password 存放root相关信息
    2. /etc/shadow 个人密码
    3. /etc/group 组信息
    
 
    
  

