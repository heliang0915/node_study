
var http=require("http");

var server=http.createServer(function(res,req){
    req.write("Hello Node");
    req.end();
});

server.listen((Math.random())*8000);