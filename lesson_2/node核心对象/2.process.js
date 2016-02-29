/**
 * Created by lenovo on 2016/2/3.
 */

process.on('uncaughtException',function(e){
    console.log("出现异常"+ e.message);
})


//用户标准输入
process.stdin.on('data', function (data) {
    //console.log(data);
    //用户标准输入
    process.stdout.write(data);
    console.log(data.toString());
});
//pid 当前进程的Id
console.log("当前进程的id "+process.pid);

//process.argv
process.argv.forEach(function(val,index,list){
    console.log("val>>"+val);
    console.log("index>>"+index);
    console.log("list>>"+list);
});

process.on('exit',function(){
    console.log("我被杀死了");
})

console.log(a);

//process.kill(11880);