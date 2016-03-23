/**
 * Created by lenovo on 2016/3/23.
 */
var net = require("net");
var util = require("util");
var fs = require("fs");
var ws = fs.createWriteStream("../read.txt");

var server = net.createServer({allowHalfOpen: false}, function (socket) {
    socket.setTimeout(10*1000);
    //socket.setEncoding("utf8");
    socket.on("timeout",function(){
        socket.setEncoding("utf8");
        socket.resume();
        socket.pipe(ws,{end:false});
        ws.write(socket.remoteAddress+"======>");
        console.log("timeout");
       // socket.unpipe(ws);
    })
});


server.listen(8080, '127.0.0.1', 511, function () {
    console.log("服务器启动了....");
});

server.on('connection', function () {
    server.getConnections(function (err, count) {
        console.log("客户端数量：" + count);
    });
});