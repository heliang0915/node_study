/**
 * Created by lenovo on 2016/3/24.
 */
var net = require("net");

var server = net.createServer({allowHalfOpen: false}, function (socket) {
    socket.on('data', function (data) {
        if (data) {
            console.log("接受客户端数据   " + data);
            socket.write("你好客户端...");
        }
    })
    socket.setTimeout(4*1000);
    socket.on('timeout',function(){

        console.log("客户端连接超时timeout....");
    })

});
server.listen(8080, '127.0.0.1', function (err) {
    if (err) {
        console.log("err！");
    } else {
        console.log("服务器启动成功！");
    }

});
server.on("connection", function () {
    server.getConnections(function (err, count) {
        if (err) {
            console.log("客户端连接出错：" + err);
        } else {
            console.log("客户端连接个数：" + count);
        }

    })
});



server.on('close', function () {
    console.log("close....");
})
server.on("end", function () {
    console.log("end...");
})
server.on('error', function (err) {
    console.log("服务器端断开连接...");
});