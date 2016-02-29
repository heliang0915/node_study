/**
 * Created by lenovo on 2016/2/3.
 */
//1.global
// setImmediate clearImmdiate
// process 进程对象
// pid 进程号

/**
 *  1.当前内部声明的对象
 *  2.全局对象
 *  3.从外界传入的参数
 *  4.
 *
 */

/**
 *  module 模块
 *  exports　导出对象
 *  require　加载模块的方法
 *  __dirname 当前模块所在的目录的绝对路径
 *  __filename 当前模块的绝对路径
 */

//function x(module,exports,require,__dirname,__filename){

//}
var name = "张三";
exports.name = name;
//console.log(this.name);
//console.log(global);
//console.trace();

////用户标准输入
//process.stdin.on('data', function (data) {
//    //console.log(data);
//    //用户标准输入
//    process.stdout.write(data);
//    console.log(data.toString());
//});
//
//process.on('exit',function(){
//    console.log("exit");
//})
//
console.log(process.pid);
//setTimeout(function () {
//    process.kill(process.pid);
//
//},1000)

process.on('exit', function () {
    console.log('Bye.');
});

