/**
 * Created by lenovo on 2016/3/24.
 */

var net = require("net");
var util = require("util");
var nickName;
var clients = {};
var server = net.createServer({allowHalfOpen: false}, function (socket) {
    socket.setEncoding("utf8");
    socket.write("欢迎光临，请输入用户名  \r\n");

    socket.on("data", function (data) {
        console.log("data>>>>");
        if (nickName) {
            //console.log(clients.length);
            //广播给所有人
            for (var name in clients) {
                console.log("name>>>>"+name);
                //if (nickName != name) {
                    if(data!=""){
                        var sock = clients[name];
                        sock.write(nickName + "说：" + data + "\r\n");
                    }
                //}
            }
        } else {
            nickName = data;
            clients[nickName] = socket;
        }
    })

})
server.listen(8080, 'localhost', 511, function () {
    console.log("服务器启动...");
});
