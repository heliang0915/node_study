/**
 * Created by lenovo on 2016/4/6.
 */
var http = require('http');
//var equal = require('assert').equal;
var i = 0;
console.time('总共耗时：');
function send() {

    var options = {
        host: '127.0.0.1',
        port: 3000,
        path: '/adminNode/article/classify',
        method: 'GET'
    };

    var req = http.request(options, function (res) {
        //console.log('STATUS: ' + res.statusCode);
        // equal(200, res.statusCode);
        //console.log('HEADERS: ' + JSON.stringify(res.headers));

        res.on('data', function (chunk) {
            //console.log('BODY: ' + chunk);
            console.log("调用");
        });
    });

    req.on('error', function (e) {
        console.log('problem with request: ' + e.message);
    });
    req.on('close', function () {
        //console.log('close');
        i++;
        if (i < 100000) {
             send();
        } else {
            console.timeEnd('总共耗时：');
            console.log('总共发起' + i + "次调用");
        }

    })
    req.end();
}
send();
//console.time('a');
//for(var i=0;i<10000;i++){
//    send();
//}
//
//console.timeEnd('a');
