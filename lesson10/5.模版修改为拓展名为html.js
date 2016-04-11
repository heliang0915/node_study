/*
 * npm install ejs
 * */

var express = require('express');
var ejs = require("ejs");
var app = express();
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