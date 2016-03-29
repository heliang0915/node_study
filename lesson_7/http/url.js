/**
 * Created by helia on 2016/3/29.
 */
var url=require("url");

var urlObj=url.parse("http://zhufengpeixun:123@192.168.1.1:8080/ajax?id=111&name=222#top=111",true);
//console.log(urlObj);

console.log(url.format(urlObj));
//console.log(urlObj.protocol);
//console.log(urlObj.auth);
//console.log(urlObj.host);
//console.log(urlObj.port);
//console.log(urlObj.hostname);
//console.log(urlObj.query);
//console.log(urlObj.pathname);
//console.log(urlObj.href);

