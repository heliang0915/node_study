var http = require("http");
var url = require("url");
var proto = {};

//中间件连接服务器
function createServer() {
    function app(req, res) {
        app.handle(req, res);
    }

    //把proto中的属性拷贝到app中
    Object.assign(app, proto);
    app.stack = [];
    return app;
}

proto.use = function (router, fn) {
    var handle = fn;
    var path = router;
    if (typeof router != "string") {
        handle = router;
        path = "/";
    }
    this.stack.push({handle: handle, path: path});
}

//处理函数
proto.handle = function (req, res) {
    var stack = this.stack;
    var index = 0;

    function next(err) {
        var layer = stack[index++];
        if (layer) {
            var router = layer.path;
            var handle = layer.handle;
            var path = url.parse(req.url).pathname;
            if (path.startsWith(router)) {
                if (err) {
                    if (handle.length == 4) {
                        handle(err, req, res, next);
                    } else {
                        next(err);
                    }
                } else {
                    handle(req, res, next);
                }

            } else {
                next();
            }
        }
    }

    next();
}


proto.listen = function (port) {
    var server = http.createServer(this);

    server.listen(port, function () {
        console.log("服务器启动了...");
    });

};
module.exports = createServer;
