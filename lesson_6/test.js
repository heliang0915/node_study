/**
 * Created by lenovo on 2016/3/23.
 */
var net=require("net");
var util=require("util");

var server=net.createServer({allowHalfOpen:false},function(socket){

    socket.setEncoding("utf8");
    socket.on("data",function(data){
        console.log(data);
        console.log("接收到的字节数:"+socket.bytesRead);
    })
    socket.on("close",function(){
        console.log("客户端关闭 close...");
    });

    socket.on('end',function(){
        console.log("客户端关闭 end.....");
    })
    console.log("当前客户机IP地址为:"+util.inspect(socket.address()));
})
server.on("connection",function(){
    server.getConnections(function(err,count){
        console.log("服务器获取的连接个数为"+count+"个");
    });
})
server.listen(8080,"0.0.0.0",511,function(){
    console.log("服务器启动....");
});
server.on('error',function(err){
    console.log("服务器出现错误"+err);
});