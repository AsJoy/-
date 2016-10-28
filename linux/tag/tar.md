# tar
> 打包成 tar.gz

1. `-c` 产生.tar的文件
2. `-v` 显示详细信息
3. `-f` 指定打包生成的文件名
4. `-z` 打包的同时压缩
5. `-x` 解压.tar文件
demo
-------
1. 打包`tar -cvfz test.tar.gz dir1`
2. 解压 `tar -xvfz test.tar.gz`


> 注意
1. 有的unix 不支持`-z` 选项 可以先`tar -cvf test.tar dir1` 再 `gzip test.tar test.tar.gz`
