var dgram = require('dgram');

var buff = new Buffer("你好")
var client = dgram.createSocket("udp4");

client.send(buff, 0, buff.length, 8001, '127.0.0.1', function (err, count) {
    console.log("发送了%d个字符", count);
    client.close();
});

client.on('close', function () {
    console.log("close");
})

client.on('error', function (err) {
    console.log("出现错误" + err);
})