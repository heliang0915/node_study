/*
 *  中间件
 *  1. 每个中间件都可以控制流程是否继续执行
 *  2.req res
 *  3.如何出错了 会转交 错误中间件进行处理
 *
 * */
var express = require("express");
var app = express();

//中央
app.use(function (req, res, next) {
    req.mny = 100;
    console.log("中央");
    next();
});


//省
app.use(function (req, res, next) {
    req.mny = req.mny - 10;
    console.log("省");
    next("钱丢了");
});


//村
app.use(function (req, res, next) {
    req.mny = req.mny - 80;
    console.log("村");
    next();
})

app.all("*", function (req, res, next) {
    console.log("农民手里");

    res.send("" + req.mny);
})

app.use(function (err, req, res, next) {
    console.log("中央和省中间");
    res.end(err);
});


app.listen(8080);