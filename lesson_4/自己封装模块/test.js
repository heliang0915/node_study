/**
 * Created by lenovo on 2016/2/29.
 */
var myFile=require("./myReadFile");

var file=new myFile();
file.setDefaultCount(12);
file.readChunk('readme',function(result){
    console.log(result);
});