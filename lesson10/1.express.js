/*
 *   1.安装express
 *   npm install express
 *   2.获取和引用
 *
 * */

var express = require('express');
var app = express();

app.get("/list", function (req, res) {
    console.log("list");
    res.send("get:" + req.url);
})

app.post("/post", function (req, res) {
    console.log();
    res.sennd("post:" + req.url);
});

app.all("/all", function (req, res) {
    console.log('all');
    res.send("all");
})
app.all("*",function(req, res){
    console.log();
    res.send("此页面不存在...");
})

app.listen(8000, function () {
    console.log("express启动...");
});