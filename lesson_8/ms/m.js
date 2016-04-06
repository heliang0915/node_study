var fork = require('child_process').fork;
var cpuLen = require('os').cpus().length;

var workers = {};

for (var i = 0; i < cpuLen; i++) {
    var worker = fork('./w.js');
    workers[worker.pid] = worker;
    console.log("子进程pid "+worker.pid);
}

var server = require('net').createServer();
server.listen(8080, function () {
    for (var key in workers) {
        var worker = workers[key];
        worker.send("server", server);
    }
    //关闭TCP服务器监听
    server.close();
});

