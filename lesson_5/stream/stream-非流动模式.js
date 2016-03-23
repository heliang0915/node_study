/**
 * Created by lenovo on 2016/3/14.
 */
var fs=require("fs");
var rs=fs.createReadStream("read",{highWaterMark:1,encoding:'utf-8'});
//非流动模式 采用readable 每次将数据放入缓存区 主动调用rs.read方法从缓存区读取数据
var buffers=[];
rs.on("readable",function(){
    console.log("readable=====");
    var data;
    while (null!=(data=rs.read())){
        console.log("data>>>"+data);
        buffers.push(data);
    }
})

rs.on("end",function(){
    console.log("最后的文件内容:"+buffers.toString())
});