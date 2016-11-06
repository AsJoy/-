# 顺序操作符 `;` 逻辑操作符 `&&` `||`  命令替换符 \`\`

1. ` ls ; pwd; which touch` 依次执行命令
2. `ls test && cd test` 如果test存在就执行cd test 
2. `ls test || mkdir test` 如果不test就创建test 