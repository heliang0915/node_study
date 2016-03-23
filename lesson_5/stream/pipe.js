var fs=require("fs");
var rs=fs.createReadStream("./stream/read");
var ws=fs.createWriteStream("./stream/write");
//管道方法 将文件拷贝
rs.pipe(ws);