/**
 * Created by lenovo on 2016/2/29.
 */
//base64 将3个8位字节 转换为 4个6位字节 不足高位补0

console.log(parseInt('1f',16));

var tempStr=new Buffer('珠');
console.log(tempStr);
//将buff的3位置字节转换为 16进制
console.log('转16进制:');
console.log(parseInt('e7',16));//231
console.log(parseInt('8f',16));//143
console.log(parseInt('a0',16)); //160

console.log('转2进制:');
console.log((231).toString(2));//11100111
console.log((143).toString(2));//10001111
console.log((160).toString(2));//10100000

//补位
//11100111 10001111 10100000---->111001 111000 111110 100000-->
// 00111001  00111000 00111110  00100000

//2--->10进制
console.log(parseInt('00111001',2));
console.log(parseInt('00111000',2));
console.log(parseInt('00111110',2));
console.log(parseInt('00100000',2));

var str='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
str+=str.toLocaleLowerCase();
str+='0123456789';
str+='+/';

console.log(str[57]+str[56]+str[62]+str[32]);


var str=new Buffer('sdfdf');

str.forEach(function(i){

});




