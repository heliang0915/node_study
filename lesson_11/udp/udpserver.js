/*创建udp服务器*/

var dgram = require('dgram');

var udpServer = dgram.createSocket("udp4");

udpServer.on('message', function (msg, rinfo) {
    console.log("msg:"+msg);
    console.log(rinfo);
})

udpServer.on('listening', function () {
    var address = udpServer.address();
    console.log("监听服务器 address ：" + address.address + " port :" + address.port);
})

udpServer.bind(8001, '127.0.0.1');








