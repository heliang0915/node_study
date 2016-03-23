/**/
var fs=require("fs");
var rs=fs.createReadStream("stream/read",{highWaterMark:1,encoding:'utf-8'});

rs.on("readable",function(){
    console.log("readable=====");
    var buff;
    while (null!=(buff=rs.read(1))){
         var char=buff[0];
        console.log(char);
    }
})