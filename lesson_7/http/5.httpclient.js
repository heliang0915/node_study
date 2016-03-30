var http=require("http");
var options={
    hostname:"localhost",
    port:8080,
    headers:{
        'Content-Type':"application/json"
    },
    path:'/',
    method:'post'
}
var request=http.request(options,function(req,res){
    var result='';
    req.setEncoding("utf8");
    req.on('data', function (data) {
        result+=data;
    })
    req.on('end',function(){
        console.log("client:"+result);
    })
});

request.write(JSON.stringify({name:'珠峰培训'}));
request.end();