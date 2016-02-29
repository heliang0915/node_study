//事件发射器
var eventEmitter = require("events");
var util = require("util");
console.log(eventEmitter);

function Bell(name) {
    this.name = name;
}
util.inherits(Bell, eventEmitter);

var jingleBell = new Bell('jingle');

jingleBell.on('ring', function () {
    console.log('收到礼物');
})
jingleBell.addListener('ring', function () {
    console.log('收到礼物2');
})
jingleBell.addListener('ring', function () {
    console.log('收到礼物3');
})
jingleBell.addListener('ring', function () {
    console.log('收到礼物4');
})
jingleBell.addListener('ring', function () {
    console.log('收到礼物5');
})
jingleBell.addListener('ring', function () {
    console.log('收到礼物6');
})
jingleBell.addListener('ring', function () {
    console.log('收到礼物7');
})
jingleBell.addListener('ring', function () {
    console.log('收到礼物8');
})
jingleBell.addListener('ring', function () {
    console.log('收到礼物9');
})
jingleBell.addListener('ring', function () {
    console.log('收到礼物10');
})
jingleBell.addListener('ring', function () {
    console.log('收到礼物11');
})
jingleBell.addListener('ring', function () {
    console.log('收到礼物12');
})

//返回事件的数量
console.log("ring 事件有：" + jingleBell.listenerCount('ring') + "个");


//检查当前事件发射器上指定事件的监听数组
console.log("返回监听数组：" + jingleBell.listeners('ring'));
//移除所有事件
//jingleBell.removeAllListeners('ring');

var drop = function () {
    console.log('丢了');
}
//事件只执行一次就解绑了
jingleBell.once('drop', drop);

jingleBell.emit('ring');

//返回事件的数量
console.log("ring 事件有：" + jingleBell.listenerCount('ring') + "个");


//移除事件
jingleBell.removeListener('drop', drop);

jingleBell.emit('drop');
jingleBell.emit('drop');

//返回最大listener数量
console.log("最大listener的值：" + jingleBell.getMaxListeners() + "个");