/**
 * Created by lenovo on 2016/2/29.
 */
var fs = require('fs');
var list = [];
fs.open('readme', 'r', function (err, fd) {
    var position = 0;
    function read() {
        var buffer = new Buffer(3);
        fs.read(fd, buffer, 0, 3, position, function (err2, bytesRead) {
            position += bytesRead;
            list.push(buffer.slice(0,bytesRead));
            if (bytesRead > 0) {
                read();
            } else {
                var result = Buffer.concat(list);
                console.log(result.toString());
            }
        });
    }
    read();
})