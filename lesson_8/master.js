/**
 * Created by lenovo on 2016/4/6.
 */
var cp = require('child_process');

var n = cp.fork(__dirname + "/worker.js");

n.on('message', function (m) {
    console.log('线程发送过来的消息' + JSON.stringify(m));
})

n.send({hello: 'hello'});