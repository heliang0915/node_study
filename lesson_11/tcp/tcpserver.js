var net = require('net');

var server = net.createServer(function (socket) {
    socket.write("你好，请输入...");


    socket.on('data', function (data) {
        if(data){
            console.log('来自客户端的数据：' + data);
        }
        //向客户端写入数据
        socket.write("你好!");
    })


    socket.on('end', function () {
        console.log('服务链接断开...');
    })

    socket.on('connect',function(){
        console.log("客户端连接服务器...");
    })

    socket.on('error',function(){
        console.log("客户端发生错误...");
    })

    socket.on('close',function(){
        console.log('套接字关闭');
    })

    socket.on('timeout',function(){
        console.log('套接字链接超时...');
    })
    //关闭noDelay算法 数据实时在网络上传输 默认为true 优化网络资源 数据到达指定阀值时发送
    socket.setNoDelay(false);


})

server.listen(5000,'127.0.0.1',511,function () {
    console.log("tcp服务器启动...");
});


server.on('listening',function(){
    console.log('监听...');
})
server.on('close',function(){
    console.log('服务器关闭...');
});
server.on('error',function(){
    console.log('服务器出现错误...');
});
server.on('connection', function (socket) {
    server.getConnections(function(err,count){
        console.log('客户端个数'+count);
    });
    console.log('客户端链接...');
})