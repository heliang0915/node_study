/**
 * Created by lenovo on 2016/2/29.
 */
var fs = require('fs');
fs.open('readme', 'r', function (err, fd) {
    if (err) {
        console.log(err);
    }
    var buffer = new Buffer(12);
    fs.read(fd, buffer, 0, 6, 0, function (err2, bytesRead) {
        fs.read(fd, buffer, 6, 6, bytesRead, function (err3, bytesRead) {
            console.log("bytesRead>>" + bytesRead);
            console.log("buffer>>" + buffer.toString());
        });
    });
})