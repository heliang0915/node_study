var net = require("net");

var client = net.connect({port: 5000}, function () {
    console.log("客户端连接成功");
    client.write("hello World");

});


client.on('data', function (data) {
    console.log('data:' + data);
    client.end();
})

client.on('end',function(){
    console.log('client end');
})


