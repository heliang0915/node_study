/**
 * Created by lenovo on 2016/2/29.
 */
var buff=new Buffer(3);
buff[0]=0x62;
buff[1]=0x75;
buff[2]=0x66;

var buff2=new Buffer("abc");

var buffer=new Buffer([0x62,0x75,0x66,0x66,0x65,0x72]);

console.log(buff.toString());
console.log(buff2.toString());
console.log(buffer.toString());