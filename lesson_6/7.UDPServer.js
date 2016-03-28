var dgram=require("dgram");
var socket=dgram.createSocket("udp4");
socket.bind("4321",'localhost',function(){
    console.log("udp服务器启动...");
});
socket.on("message",function(msg,rinfo){
    console.log("客户端发送过来的消息是:"+msg.toString());
    console.log(rinfo);
    socket.send(msg,0,msg.length,rinfo.port,rinfo.address);
})