/**
 * Created by lenovo on 2016/3/24.
 */

var net = require("net");
var util = require("util");

var clients = {};
var server = net.createServer({allowHalfOpen: false}, function (socket) {
    var nickName;
    socket.setEncoding("utf8");
    socket.write("welcome place input your name \r\n");
    server.getConnections(function (err, count) {
        socket.write("欢迎观临，当前在线人数为" + count + "人\r\n");
    })
    socket.on("data", function (data) {
        console.log("data>>>>");
        if (nickName) {
            //广播给所有人
            data = data.replace("\r\n", "")
            broadcast(nickName, data);
        } else {
            nickName = data;
            clients[nickName] = socket;
            broadcast(nickName, nickName + "加入聊天室\r\n");
        }
    })
    socket.on('end', function () {
        broadcast(nickName, nickName + "离开聊天室\r\n");
        clients[nickName].destroy();
        delete  clients[nickName];
    })
    socket.on("error", function (er) {
        console.log(er);
    })
    socket.on("close", function (er) {
        console.log(er);
    })
})


function broadcast(nickName, msg) {
    for (var name in clients) {
        console.log("name>>>>" + name);
        if (nickName != name) {
            if (msg != "") {
                var sock = clients[name];
                sock.write(nickName + "say：" + msg + "\r\n");
            }
        }
    }
}

server.listen(8080, 'localhost', 511, function () {
    console.log("服务器启动...");
});
