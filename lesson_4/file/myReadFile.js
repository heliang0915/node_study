/**
 * Created by lenovo on 2016/2/29.
 */
/*
 * 自己封装的读取文件方法 分块去读取
 * */
var fs = require('fs');
var myFile = function () {
    this.list = [];
    this.defaultCount = 3;
}

myFile.prototype.setDefaultCount = function (count) {
    this.defaultCount = count;
}
myFile.prototype.readChunk = function (fileName, callback) {
    var _this = this;
    fs.open(fileName, 'r', function (err, fd) {
        if (err) {
            console.log(err);
        }
        var position = 0;

        function read() {

            var buffer = new Buffer(_this.defaultCount);
            fs.read(fd, buffer, 0, _this.defaultCount, position, function (err, bytesRead) {
                position += bytesRead;
                _this.list.push(buffer.slice(0,bytesRead));
                if (bytesRead > 0) {
                    console.log("position  " + position);
                    read();
                } else {
                    var result = Buffer.concat(_this.list);
                    typeof callback == "function" ? callback(result) : null;
                }
            })
        }

        read();
    })
};

exports = module.exports = myFile;
