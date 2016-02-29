/**
 * Created by lenovo on 2016/2/16.
 */
var fs = require("fs");
fs.readFile('1.txt', function (err, data) {
    console.log(data.toString());
});

//process.nextTick(function () {
//    console.log("nextTick");
//});

setImmediate(function(){
    console.log("setImmediate");
    setImmediate(function(){
        console.log("setimmediate2");
    })
})

setTimeout(function () {
    console.log(" setTimeout ");
},0)
