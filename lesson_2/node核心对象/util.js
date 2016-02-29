/**
 * Created by lenovo on 2016/2/16.
 */
/**
 * util
 * **/

var util=require("util");



function Parent(){
    this.name="张三";
    this.age=100;
    this.say=function(){
        console.log(this.name);
    }
}
Parent.prototype.showName=function(){
    console.log(this.name);
}


function Child(){
    //Parent.call(this);
    this.name='Child';
}

//缺点：1.不可以传参 2.会继承私有方法
//Child.prototype=new Parent();

//推荐继承
//Child.prototype=Object.create(Parent.prototype);

//使用工具方法完成继承
util.inherits(Child,Parent);

var child=new Child();
child.showName();
//console.log(child.age);



function Person(){
    this.name='zhfengpeixun';
    this.parent={
        name:'aa'
    }
}
Person.prototype.toString=function(){
    console.log(this.name);
}
var p=new Person();
/**
 *
 * 递归的调用inspect
 * showHidden 是否隐藏
 * depth 对象的递归显示深度
 * colors 是否显示颜色
 */
console.log(util.inspect(p,true,0,true));
p.toString();


var ary1=[1,2];
var ary2=[3,4,5];

console.log(ary1.concat(ary2));
//Array.prototype.push.apply(ary1,ary2);
//console.log(ary1);

//Array.prototype.push.apply(ary1,ary2);
//console.log(ary1)

console.log(util.isArray(ary1));