/*
 *  接受客户端的数据
 *  1.通过 query查询字符串
 *  2.途径参数
 *  3.请求体
 * */

var express = require('express');
var app = express();

app.get('/query', function (req, res) {
    res.send(req.query);
})

app.get("/article/:id/:name", function (req, res) {
    var id = req.params.id;
    var name = req.params.name;
    res.send(req.params);
})

app.all('/status', function (req, res) {
    res.sendStatus(200)
    //res.send("200");
})

app.all("/host", function (req, res) {
    console.log(req.path);
    console.log(req.host);
    res.send("host");
})

app.listen(8000);




