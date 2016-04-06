
var http=require("http");

var server=http.createServer(function(res,req){
    req.write("Hello Node");
    req.end();
});

server.listen((Math.random())*8000,function(){
    console.log("服务器启动...");
});