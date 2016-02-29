/**
 * Created by lenovo on 2016/2/29.
 */

//读取文件
var fs=require("fs");
/*
  path：文件路径
  options:
  flag:
*   O_EXCL 排他
*   O_RDWR 读写
*   O_CREAT 文件不存在则创建
*   O_APPEND 在原来的基础上追加
*   O_WRONLY 只写
*   O_SYNC 同步
*   O_RDONLY 只读
*   O_TRUNC 清空文件
* */
fs.readFile('index',{flag:'w',encoding:'utf8'},function(err){
    if(err)
    console.log(err);
});


