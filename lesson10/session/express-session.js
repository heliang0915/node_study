var express = require('express');
var session = require("express-session");
var redisStore=require('connect-redis')(session);
var filter = require("./filter");

var app = express();
app.use(session({
    secret: Math.random() + "",
    //cookie: {maxAge: 30 * 60 * 1000}, //设置过期时间
    resave: true, //即使 session 没有被修改，也保存 session 值，默认为 true。
    saveUninitialized: true, //保存新创建但未修改的session
    store:new redisStore({  //使用redis作为session的存储
        host:"127.0.0.1",
        port:6379,
        ttl:10 //过期时间 单位秒
    })
/*
 参数
* client 你可以复用现有的redis客户端对象， 由 redis.createClient() 创建
 host   Redis服务器名
 port   Redis服务器端口
 socket Redis服务器的unix_socket

*可选参数

 ttl        Redis session TTL 过期时间 （秒）
 disableTTL 禁用设置的 TTL
 db         使用第几个数据库
 pass       Redis数据库的密码
 prefix     数据表前辍即schema, 默认为 "sess:"
* */


}));

//登录过滤器
app.use(filter.loginFilter);


app.get('/', function (req, res) {
    res.send("wellcome" + req.session.name);
    //console.log(req.session);
    //if (req.session.sign) {
    //    console.log(req.session);
    //    res.send("wellcome" + req.session.name);
    //} else {
    //    req.session.sign = true;
    //    req.session.name = '张苏纳';
    //    res.send('欢迎登陆...');
    //}
})

app.listen(8080);

