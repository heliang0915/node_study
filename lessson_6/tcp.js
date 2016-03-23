/**
 * Created by helia on 2016/3/23.
 */

var net = require('net');
var util = require("util");

var server=net.createServer({allowHalfOpen: false,}, function (socket) {

    console.log("客户端地址:"+util.inspect(socket.address()));
    //服务器端连接数
    server.getConnections(function(err,count){
            console.log(count);
    });

    socket.on('error',function(err){
        console.log(err);
        //销毁客户端
        socket.destroy();
    })

    setTimeout(function(){
        server.close();
        console.log("服务器调用关闭事件");
    },10000)


});

server.listen(8080,'0.0.0.0',511, function () {
    console.log("服务器端地址:"+util.inspect(server.address()));
});
server.on('error',function(err){
    console.log("err"+err);
})

server.on('close',function(){
    console.log("服务器关闭了...");
})
