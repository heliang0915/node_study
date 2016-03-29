/**
 * Created by helia on 2016/3/29.
 */
var querystring=require("querystring");

var str="id=111&name=222";
var str2="id@111;name@222";
var obj=querystring.parse(str);

console.log(querystring.parse(str));
console.log(querystring.parse(str2,';','@',{maxKeys:0}));
console.log(querystring.stringify(obj,';','@'));



