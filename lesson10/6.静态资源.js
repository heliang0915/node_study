var express = require('express');
var ejs = require("ejs");
var path = require("path");
var fs = require("fs");
var app = express();

//静态文件处理
app.use(express.static(path.join(__dirname, "public"), {
    dotfiles: 'allow',
    index: '.hello.html', //页面进入的欢迎页面
    setHeaders: function (res, path, state) {
        res.setHeader('name','珠峰')
        console.log(arguments);
    }
}));

//自己实现(静态文件处理)
//app.use(function (req, res) {
//    var rs = fs.createReadStream(path.join(__dirname, "public", req.path));
//    rs.on('error', function () {
//        next();
//    })
//    rs.pipe(res);
//})

app.set('view engine', 'html');
app.engine('html', ejs.__express)
app.set('views', __dirname);
app.get('/', function (req, res) {
    res.render('index', {
        name: 'zhufeng',
        age: 100
    })
});

app.listen(8000);