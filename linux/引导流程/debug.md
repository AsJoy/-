# 调试

1. 查看引导流程产生的故障 
      1. exp `dmesg | grep eth0`
      2. 查看记录日志是否有异常`/var/log/message`  exp `grep 'sda' /var/log/messages`