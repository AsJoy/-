# 文件操作
1. 常见操作: `cd` `pwd` `mkdir` `rmdir` `rm`
2. `echo $path` 查看环境变量
3. `PATH="$PATH":/xxx` 添加环境变量
4. 查看文档
    1. `head [-n -number]` 显示前几行
    2. `tail [-n -number]` 显示后面number行 用于查看日志
5. `groupadd` 添加组
6. `useradd -G groupa usera` 添加用户到指定组
7. example: 
    ```
    例题:
    我想在 /tmp 底下建立一个目录,这个目录名称为 chapter7_1 , 设置这个目录拥有者为 dmtsai, 群组为 users ,此外,任何人都可以进入该目弽浏觅档案,不过除了 dmtsai 之外,其他人都不能修改该目录下的档案。
    答:
    因为除了 dmtsai 之外,其他人不能修改该目录下的档案,所以整个目弽的权限应该是 drwxr-xr-x 才对! 因此你应该这样做:
    建立目录: mkdir /tmp/chapter7_1
    修改属性: chown -R dmtsai:users /tmp/chapter7_1
    修改权限: chmod -R 755 /tmp/chapter7_1
    ```
8. `whereis xxx` 完成路径搜索
8. `which ls` 查看系统命令路径 和别名 
9. `locate -ir xxx` 关键字搜索 ` find /etc -name '*httpd*'`

10. `ls -ald xxx` -d 是查看具体某一目录的信息
11. `cp -R fa fb da` 拷贝目录
12. `ln -s srcd filed` 设置软连接 软连接类似于window快捷方式
13. `ln srcd distd` 设置硬链接 硬链接类似于拷贝+同步更新。同步更新的原因是因为硬链接具有相同的i 节点, 可以通过`ls -i` 查看, 操作系统写入的时候是通过i节点数字标示查找到对应的文件进行写入。 因为i 节点相同操作系统不知道写入哪一个 就会一同写入, 软连接可以跨文件系统设置, 硬链接不能跨文件系统
14. `echo 'xxxxxxxxxxxx' >> filea` 将xxxxxxxxxxxx写入到filea 文件最后