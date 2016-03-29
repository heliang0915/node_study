/**
 * Created by helia on 2016/3/29.
 */
var http = require("http");

var server = http.createServer(function (req, res) {

    res.setHeader('Content-Type','text/html');
    console.log(res.getHeader('Content-Type'));
    console.log("headerSent>>"+res.headersSent);
    res.sentDate=false;
    res.statusCode=400;

    //res.removeHeader("Content-Type");
    //console.log(res.getHeader('Content-Type'));

    res.write("欢迎访问我的服务器...");
    console.log("headerSent>>"+res.headersSent);
    res.end();
})
server.listen(8080, function () {
    console.log("服务器启动成功...");
});

server.on("connect", function (req, socket, head) {
    console.log("connect");
    console.log(socket.address);

})
