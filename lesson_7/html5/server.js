/**
 * Created by helia on 2016/3/30.
 */
var mime = require("mime");
var http = require("http");
var util = require("util");
var querystring = require("querystring");
var url = require("url");
var fs = require("fs");
var formidable = require("formidable");
var path = require("path");

var successCount = 0;


var app = http.createServer(function (req, res) {
    var urlOjb = url.parse(req.url, true);
    var pathname = urlOjb.pathname;
    if (pathname == "/") {
        fs.createReadStream("./index.html").pipe(res);
    } else if (pathname == "/post") {
        var parser = new formidable.IncomingForm();
        parser.parse(req, function (err, fields, files) {
            var fileName = fields.name;
            var index = fields.index;
            var total = fields.total;
            var data = fields.data;
            var size = fields.size; //每个分片的文件大小
            var ext = fields.ext;
            //从临时文件中读取
            var src = fs.createReadStream(files.data.path);
            //写入目标
            var target = fs.createWriteStream(fileName + "." + index);
            src.pipe(target);
            target.on('close', function () {
                if (total - 1 == successCount) { //最后一个
                    //合并文件
                    console.log("合并");
                    var uploadPath = "upload/" + fileName
                    var fd = fs.openSync(uploadPath, 'a');
                    var uploadFiles = fs.readdirSync(".");
                    uploadFiles.forEach(function (file, index) {
                        if (file.toString().indexOf(fileName + ".") > -1) {
                            var fileSize = size;
                            var ind = path.extname(file).slice(1);
                            if (ind == total - 1) {
                                var states = fs.statSync(file);
                                fileSize = states.size; //检测文件的实际大小
                            }
                            var buff = fs.readFileSync(file);
                            var position = (ind - 1) * fileSize;//计算位置
                            fs.writeSync(fd, buff, 0, buff.length, position);
                            fs.unlinkSync(file);
                            successCount = 0;
                        }
                    })
                    fs.closeSync(fd);
                } else {
                    successCount++;
                }
                fs.unlinkSync(files.data.path);
            })
            res.end("hellos");
        })
    }
});

app.listen(8080, function () {
    console.log("服务器启动成功...");
});
