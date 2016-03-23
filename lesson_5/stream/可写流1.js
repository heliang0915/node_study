var fs=require("fs");
var rs=fs.createReadStream("./stream/read");
var ws=fs.createWriteStream("./stream/write");


rs.on('data',function(data){
     var flag=ws.write(data);
    console.log(flag==false?"缓存区满了":"缓存区未满");
})

ws.on("drain", function () {
    console.log("缓存区排空了.........");
})

rs.on('end',function(){
     ws.end(function(){
         console.log("写入文件%d个字节",ws.bytesWritten);
     });
})
