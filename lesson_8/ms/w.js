
var server=require("http").createServer(function(req,res){
    res.write("hello["+process.pid+"]");
    res.end();
})


process.on('message',function(m,tcp){
    if(m==='server'){
        tcp.on('connection',function(socket){
            server.emit('connection',socket);
        })
    }
})

process.on('error',function(){
    console.log("err");
})
process.on('exit',function(){
    console.log("exit");
})
process.on('close',function(){
    console.log("close");
})

process.on('disconnect',function(){
    console.log("disconnect");
})

