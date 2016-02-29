/**
 * Created by lenovo on 2016/1/15.
 */

var http=require("http");

var onRequest=function(req,res){

    //设置响应头信息
    res.setHeader("Content-Type","text/html;charset=utf-8");
    res.setHeader("name","aaaa");


    //写入 请求信息
    res.write("url:"+req.url+"<br>");
    res.write("method:"+req.method+"<br>");
    res.write("request header:"+JSON.stringify(req.headers)+"<br>");



    res.write("当前时间："+new Date().toString());


    res.end();
}
var server=http.createServer(onRequest);
server.listen(8010,function(){
    console.log("服务器启动成功");
});

