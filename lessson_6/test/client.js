var net=require("net");
var socket=new net.Socket({allowHalfOpen:false});
socket.setEncoding("utf-8");
//连接服务器
socket.connect(8080,'127.0.0.1',function(err){
    if(err){
        console.log("客户端链接失败");
    }else{
        console.log("客户端链接成功!");
        socket.write("你好服务器");
        socket.on('data',function(data){
            console.log("服务器返回的消息..."+data);
        })

    }
})
//socket.on('close',function(){
//    console.log("客户端断开连接...");
//})

socket.on('error',function(err){
    if(err.toString().indexOf("connect ECONNREFUSED")>-1){
        console.log("服务器拒绝连接，请稍后再试...");
    }else{
        console.log("连接异常,请稍后再试...."+err);
    }
})


