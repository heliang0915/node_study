var fs = require("fs");
//流动模式：将文件以尽快的速度读取出来 然后发射事件
var rs = fs.createReadStream("test/testFile", {encoding: "utf8"});
var rs2 = fs.createReadStream("test/testFile", {encoding: "utf8"})
rs.on('data', function (data) {
    console.log(data);
});

//非流动模式：将文件读取到缓冲区中 然后一点点的读取数据 需要用户主动调用read方法
rs2.on('readable', function () {
    var data;
    while (null != (data = rs2.read(1))) {
        console.log(data);
    }
});


var path="1.txt";
fs.writeFile(path,"",function(){
    console.log("文件写入...");
})

