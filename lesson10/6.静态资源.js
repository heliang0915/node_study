var express = require('express');
var ejs = require("ejs");
var path = require("path");
var fs = require("fs");
var app = express();
//app.use(express.static(path.join(__dirname, "public")));

app.use(function (req, res) {
    var rs = fs.createReadStream(path.join(__dirname, "public", req.path));
    rs.on('error', function () {
        next();
    })

    rs.pipe(res);

})

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