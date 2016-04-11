var url = require("url");
var app = require('http').createServer(function (req, res) {
    var urlObj = url.parse(req.url);
    var pathname = urlObj.pathname;

    if (pathname == "/") {
        send('首页');
    } else if (pathname == "/list") {
        send('list');
    }


    function send(html){
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write(html);
        res.end();
    }
});


app.listen(9000, function () {
    console.log("启动..");
});

