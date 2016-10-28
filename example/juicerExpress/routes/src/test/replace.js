/**
 * Created by niuyuanqiang on 16/9/27.
 */
var sStr = 'qweqwe${each data as item , index}qweqweqwe'
sStr.replace(/\$\{each\s*([^\}]*)\s+as\s+(\w*?)\s*(,\s*\w*?)?\s*\}/igm, function ($, word) {
  console.log(arguments);
})
console.log(/\$\{each\s*([^\}]*)\s+as\s+(\w*?)\s*(,\s*\w*?)?\s*\}/igm.test(sStr))