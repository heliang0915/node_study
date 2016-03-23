/**
 * Created by lenovo on 2016/3/14.
 */
var fs=require("fs");

var rs=fs.createReadStream("read",{highWaterMark:100});
rs.setEncoding("utf8");

rs.on('data',function(data){
    rs.pause(); //暂停
    console.log("暂停");
    setTimeout(function(){
        rs.resume(); //启动
        console.log("启动")
    },3000)
    console.log(data);
});


