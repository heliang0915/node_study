/**
 * Created by helia on 2016/3/30.
 */
var mime = require("mime");
var http = require("http");
var util = require("util");
var querystring = require("querystring");
var url = require("url");
var fs = require("fs");
var formidable=require("formidable")

var app = http.createServer(function (req, res) {
    var urlOjb = url.parse(req.url, true);
    var pathname = urlOjb.pathname;
    if (pathname == "/") {
        fs.createReadStream("index.html").pipe(res);
    } else if (pathname == "/post") {
        var parser=new formidable.IncomingForm();
        parser.parse(req,function(err,fields,files){
            console.log(files);
            res.end("hellos");
        })
    }
});

app.listen(8080, function () {
    console.log("服务器启动成功...");
});
