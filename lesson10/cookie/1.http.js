var http = require('http');
var url = require('url');
var server = http.createServer(function (req, res) {
    var pathname = url.parse(req.url, true).pathname;
    res.setHeader("Content-Type", "text/html;charset=utf8")
    if (pathname == "/cookie") {
        var time = new Date(new Date().getTime() + 5*1000).toGMTString();
        //Expires='+time+'
        res.setHeader('Set-Cookie',['name=111;path=/;Expires='+time+';','age=2222;path=/;Expires='+time+';']);
        res.write('cookie发送完毕 <script>alert(document.cookie);</script>');
        res.end();
    } else if (pathname == "/") {
        var cookie = req.headers.cookie;
        console.log(cookie);
        res.end(cookie);
    }
});

server.listen(8000, function () {
    console.log("服务器启动...");
})