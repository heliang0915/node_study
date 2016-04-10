var http=require("http");

var server=http.createServer(function(req,res){
    var buffers=[]
    req.on('data',function(chunk){
        buffers.push(chunk);
    }).on('end',function(){
        res.writeHead(200,{'Content-Type':'text/html;charset=utf8'});
        res.write(Buffer.concat(buffers));
        res.end("完毕");
    })
    console.log(req.method)
    console.log(req.url)
    console.log(req.httpVerson);
    console.log(req);
})
server.listen(8002);
