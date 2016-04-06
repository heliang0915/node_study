var i=10;
var server = require('http').createServer(function (res, req) {
    req.write('current process pid is ' + process.pid);
    console.log(process.pid);
    i--;
    console.log(i);
    if(i==0){
        throw new error("arguments are not numbers");
        i=10;
    }

    req.end();
});

var worker;

process.on('message', function (m, tcp) {
    if (m === "server") {
        worker = tcp;
        worker.on('connection', function (socket) {
            server.emit('connection', socket);
        })
    }
})

process.on('uncaughtException', function () {
    //当前进程发送自杀信号
    process.send({act: 'suicide'});
    //停止接收链接
    worker.close(function () {
        //当前进程退出
        process.exit(1);
    });
});





