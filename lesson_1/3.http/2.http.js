/**
 * Created by lenovo on 2016/1/15.
 */
var http=require("http");
var mime=require("mime");
var fs=require("fs");
//可以将req.url 字符串格式化成对象 常用的方法有：query pathname等
var url=require("url");

var onRequest=function(req,res){
    var reqURL=req.url;
    //console.log("reqURL:"+reqURL);
    //true query转为对象
    var urlObj=url.parse(reqURL,true);
    var pathName=urlObj.pathname;
    console.log(pathName);
    //console.log("id>>"+urlObj.query.id);
    //console.log("age>>"+urlObj.query.age);

    //设置响应头信息
    res.setHeader("Content-Type","text/html;charset=utf-8");
    if(pathName=="/"){
        fs.readFile("html/index.html",function(err,data){
            if(err){
                res.write("服务器内部错误："+err);
            }else{
                res.write(data);
            }
            res.end();
        });
    }else if(reqURL=="/clock"){

        setInterval(function () {
            console.log("ddd")
            res.write(new Date().toString());
            res.end();
        },1000)
    }else{
        res.write("404页面未找到");
        res.end();
    }
}

var server=http.createServer(onRequest);
server.listen(8010,function(){
    console.log("服务器启动成功");
});

