/*
 * 流 流是一组有序的，有起点和终点
 * */

//流动模式
var fs=require("fs");
var rs=fs.createReadStream("read",{highWaterMark:100*1,encoding:'utf-8'});

//流动模式
rs.on('data',function(data){
    console.log(data+">>");
})

rs.on('end',function(){
    console.log("end");
})
rs.on('close',function(){
    console.log("close");
})


