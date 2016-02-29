/**
 * Created by lenovo on 2016/2/29.
 */

/*
* 大文件的读取、写入
* */
var fs=require('fs');
//fs.writeFile();
var data=fs.readFileSync('index2.txt');
console.log(data.toString());

var fd=fs.openSync("index2.txt",'r');

fs.open('index2.txt','r',function(err,fd){
    console.log(fd);
    var buffer=new Buffer(3);
    fs.readSync(fd, buffer, 0, 3);
    console.log(buffer.toString());
})




