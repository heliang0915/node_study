/**
 * Created by lenovo on 2016/2/16.
 */

//process.nextTick();

console.log("a客人");

//下个队列的顶部
setTimeout(function () {
    console.log("a扫地 setTimeout ");
},0)

//排到当前事件队列的底部
process.nextTick(function () {
    console.log("a扫地 nextTick1 ");
    process.nextTick(function(){
        console.log("a扫地 nextTick2 ");
        process.nextTick(function(){
            console.log("a扫地 nextTick3 ");
        })
    })
})

console.log("b厨师");
console.log("c厨师");