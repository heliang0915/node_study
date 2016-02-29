/**
 * Created by lenovo on 2016/2/29.
 */

var Base64={
    encodeCode:function(str){
        var tempStr=new Buffer(str);
        tempStr.forEach(function(item,index,list){
            var temp=parseInt(tempStr[i],16);
             (temp).toString(2)




        });




        console.log(tempStr);
//将buff的3位置字节转换为 16进制
        console.log('转16进制:');
        console.log(parseInt(tempStr[0],16));//231
        console.log(parseInt(tempStr[1],16));//143
        console.log(parseInt(tempStr[2],16)); //160

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
    }
}
exports.Base64=Base64;
