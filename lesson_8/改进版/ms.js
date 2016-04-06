var fork = require('child_process').fork;
var cpuLen = require('os').cpus().length;
var server = require('net').createServer();
server.listen(8000);

console.log("主进程pid " + process.pid);

var workers = {};
//创建子进程
var createWorker = function () {
    var worker = fork(__dirname + '/wk.js');
    //var pid = worker.pid;

    //监听信号
    worker.on('message', function (m) {
        if (m.act == "suicide") { //接受子进程发送的自杀信号
            console.log('重新启动...');
            //重启子进程
            createWorker();
        }

    })

    worker.on('exit', function () {
        console.log('Worker ' + worker.pid + ' 退出...');
        delete workers[worker.pid];
        //重启子进程
        createWorker();
        showWorkersPid();
    })
    //句柄转发
    worker.send('server', server);
    workers[worker.pid] = worker;
    console.log("创建worker成功！ worker pid " + worker.pid);
    showWorkersPid();
}


for (var i = 0; i < cpuLen; i++) {
    createWorker();
}

process.on('exit', function () {
    console.log('exit');
    //退出时杀死所有子进程
    for (var pid in workers) {
        workers[pid].kill();
    }
});
process.on('uncaughtException', function () {
    console.log('uncaughtException');
    //退出时杀死所有子进程
    for (var pid in workers) {
        workers[pid].kill();
    }
});


function isEmpty(obj) {
    var isEmp = true;
    for (var key in obj) {
        isEmp = false;
        break;
    }
    return isEmp;

}

function showWorkersPid() {
    var length = 0;
    for (var pid in workers) {
        length++;
    }
    console.log("worker的长度"+length);
    //console.log(workers);
}