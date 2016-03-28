/**
 * Created by lenovo on 2016/3/24.
 */

var dgram=require("dgram");
var socket=dgram.createSocket("udp4");
var buffer=new Buffer("你好服务器");

socket.send(buffer,0,buffer.length,4321,'localhost',function(err,bytes){
    if(err){
        console.log(err);
    }else{
        console.log("发送了%d个字节",bytes);
    }
});

socket.on("message",function(msg,rinfo){
    console.log("接收到服务器发送回来的数据："+msg);
})