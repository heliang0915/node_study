/**
 * Created by helia on 2016/3/23.
 */
var net = require("net");
var util = require("util");

var server = net.createServer({allowHalfOpen: false}, function (socket) {
    socket.setEncoding("utf8");
    socket.on('data', function (data) {
        console.log("客户端对服务器端的数据"+data);
        socket.write("服务器收到："+data);
    })
});

server.listen(8080, 'localhost', 511, function () {
    console.log("服务器启动了....");
});

