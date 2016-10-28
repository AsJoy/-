#find 命令
linux 查找命令, 遵循的原则 系统资源占用越少越好, 甚至有些大规模的超着都放在凌晨去处理, 保存在一个固定的位置第二天早上起来看

1.  `-name` 根据名字查找, `*` 匹配任意字符, `?` 匹配一个任意字符; exp: `find /etc -name xxx*` `find /etc -name XXX???`
2. `-size` 根据文件大小查看文件 `+` 大于, `-` 小于, -size是按数据块为最小单位的 一数据块=512字节=0.5kb exp: `find /etc -size +200 -a -size -300`
3. `-type` 按照文件类型 f 二进制 l软连接 d目录
4. `-a` 或者 `-o` and or
5. `-exec ls -l {} \;` 执行 对找到的文件ls -l
6. `-inum` 根据i节点查询
7. 删除特殊命名的文件  
    1. `ls -i`  查看文案i节点
    2. `find -inum xxx -exec rm {} \;`
