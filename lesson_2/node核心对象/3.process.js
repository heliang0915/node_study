/**
 * Created by lenovo on 2016/2/16.
 */

//process.cwd
//current working dir  当前工作目录
console.log("当前工作目录  "+process.cwd());
console.log("目录名称  "+__dirname);
//change dir 修改当前目录
process.chdir("..");

console.log("当前工作目录  "+process.cwd());
console.log("目录名称  "+__dirname);
process.chdir(__dirname);

console.log("当前工作目录  "+process.cwd());
console.log("目录名称  "+__dirname);