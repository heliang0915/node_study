/*中间件 处理公用业务*/
var url = require("url");
var fs = require("fs");
var path = require("path");

module.exports = function (app) {
//公用的属性
    app.use(function (req, res, next) {
        var urlObj = url.parse(req.url, true);
        var pathname = urlObj.pathname;
        var query = urlObj.query;
        req.pathname = pathname;
        req.query = query;
        next();
    })
//公用的属性
    app.use(function (req, res, next) {
        //发送字符串数据
        res.send = function (html) {
            res.writeHead(200, {"Content-Type": "text/html"});
            res.end(html);
            next();
        }
        //render html模版
        res.render = function (fileName, params) {
            //检测文件扩展名 默认为.html
            var ext = path.extname(fileName);
            if (ext == "") {
                fileName = fileName + ".html";
            }
            var rs = fs.createReadStream(fileName);
            var html = "";
            rs.on('data', function (chunk) {
                var template = renderTemplate(chunk.toString())
                html += template;
            })
            rs.on('end', function () {
                res.send(html);
            })
            next();

            //render 模版
            function renderTemplate(template) {
                var reg = /\{(\w+)\}/g;
                template = template.replace(reg, function () {
                    var attr = arguments[1];
                    return params[attr];
                })
                return template;
            }


        }


        next();
    });
};