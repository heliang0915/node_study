var express = require('express');
var cookieParser = require('cookie-parser');
//console.log(cookeParser);
var queryString = require('querystring');
var app = express();
//使用cookie-parser 中间件
app.use(cookieParser());

//app.use(function (req, res, next) {
//    //if (!req.header.cookie) {
//    //    return next();
//    //} else {
//        req.cookies = queryString.parse(req.headers.cookie, ';', '=');
//        req.cookie = cookie;
//        next();
//    //}
//
//    function cookie(name, value, options) {
//        var opt = options || {};
//        var parts = [name + '=' + value];
//        if (null != opt.maxAge) {
//            parts.push("Max-Age=" + Number(opt.maxAge))
//        }
//        if (null != opt.domain) {
//            parts.push("Domain=" + Number(opt.domain))
//        }
//        if (null != opt.path) {
//            parts.push("path=" + Number(opt.path))
//        }
//        if (null != opt.expires) {
//            parts.push("Expires=" + Number(opt.expires.toUTCString()))
//        }
//        if (null != opt.httpOnly) {
//            parts.push("httpOnly");
//        }
//        if (null != opt.secure) {
//            parts.push("Secure");
//        }
//        console.log("parts>>"+parts.join(";"));
//        return parts.join(";");
//    }
//
//
//})


app.get('/cookie', function (req, res) {
    console.log(req.cookies);
    if (req.cookies.visited) {
        res.send('欢迎老朋友');
    } else {
        res.cookie('visited', 1, {maxAge: 60 * 1000});  //maxAge 设置cookie存活时间
        res.send('新朋友');
    }

})
app.listen(8000);
