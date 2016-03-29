var http = require("http");
var url=require("url");

var server = http.createServer(function (req, res) {
    var urlObj=url.parse(req.url,true);
    console.log(req.method);
    console.log(req.url);
    console.log(req.headers);
    console.log(req.httpVersion);
    console.log(req.headers.host);
    console.log(urlObj.query);

    res.write("欢迎访问我的服务器...");
    res.end();
})
server.listen(8080, function () {
    console.log("服务器启动成功...");
});

server.on("connect", function (req, socket, head) {
    console.log("connect");
    console.log(socket.address);

})
