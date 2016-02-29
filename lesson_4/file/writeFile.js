/**
 * Created by lenovo on 2016/2/29.
 */
//写文件
var fs=require('fs');
//文件写入
//fs.writeFile('index2','写入的数据',function(err){
//    console.log(err);
//})

//文件追加
fs.writeFile('index2',new Buffer('1111'),{encoding:'utf8',flag:'a'},function(err){
    console.log(err);
});

//文件追加
fs.appendFile('index2','使用 appendFile追加的文字',function(err){
    if(err){
        console.log(err);
    }
});



