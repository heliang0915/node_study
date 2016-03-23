/**
 * Created by helia on 2016/3/23.
 */
var net = require("net");
var util = require("util");

var socket = new net.Socket({allowHalfOpen: true});
socket.setEncoding('utf8');

socket.connect(8080, 'localhost', function () {
    socket.write("hello 服务器...");
    console.log(arguments);
    socket.on('data', function (data) {
        console.log("data>>>" + data);
    });
    //console.log(err+"连接到服务器.....");
});