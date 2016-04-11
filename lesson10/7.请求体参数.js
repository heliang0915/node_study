var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var app = express();

//console.log(bodyParser.json);

//静态资源中间件
app.use(express.static(path.join(__dirname, "public")));

app.use(function (req, res, next) {
    console.log(req.headers['content-type']);
    next();
});
//处理post中 获取参数的中间件 post可以通过 req.body获取参数
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.post('/post', function (req, res) {
    //console.log(res);
    res.send(req.body);
});


app.listen(8000);