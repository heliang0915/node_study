/**
 * Created by lenovo on 2016/2/29.
 */

var fs = require("fs");
var myReadFile = require('./myReadFile');
var f =new myReadFile();
console.log('f'+f);

function copy(src, target) {
    f.readChunk(src, function (result) {
        fs.writeFileSync('2.txt',result);
    });
}

copy('1.txt', '2.txt');