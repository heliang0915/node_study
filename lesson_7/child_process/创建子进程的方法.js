var cp = require('child_process');

//cp.spawn('node', ['worker.js']);
//
//cp.execFile('worker.js', function () {
//    console.log("execFile回调");
//});
//
//cp.exec('node worker.js', function (err,stdout,stdin) {
//    console.log("exec回调"+err);
//});

cp.fork('./worker.js');