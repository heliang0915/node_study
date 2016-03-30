/**
 * Created by helia on 2016/3/29.
 */
var http = require("http");
var util = require("util");
var querystring = require("querystring");
var url = require("url");
var fs=require("fs");
var server = http.createServer(function (req, res) {

    var urlOjb = url.parse(req.url, true);
    var pathname = urlOjb.pathname;
    if (pathname == "/") {
        fs.createReadStream("index.html").pipe(res);
       // res.end("写入完成..");
    } else if (pathname == "/post") {
        var result = '';
        var contentType = req.headers['content-type'];


        req.setEncoding("utf8");
        req.on('data', function (data) {
            result += data;
        })
        req.on('end', function () {
            console.log("server:" + result);
            var obj;
            if (contentType == "application/json") {
                obj = JSON.parse(result);
            } else if(contentType=='application/x-www-form-urlencoded'){
                obj = querystring.parse(result);
            }

            res.end(util.inspect(obj));
        })
    }
})
server.listen(8080, function () {
    console.log("服务器启动成功...");
});

server.on("connect", function (req, socket, head) {
    console.log("connect");
    console.log(socket.address);

})
