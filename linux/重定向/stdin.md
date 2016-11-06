# 0 输入 `>` 或者 `>>`

1.  exp: `ls -l > init.tb` 如果init.tb存在就会覆盖文件 没有回创建 并将结果输入到init.tb 中
2.  exp: `ls -l >> init.tb` 如果有则append到文件中 如果没有则创建

