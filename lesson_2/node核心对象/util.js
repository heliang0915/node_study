/**
 * Created by lenovo on 2016/2/16.
 */
/**
 * util
 * **/

var util=require("util");



function Parent(){
    this.name="����";
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

//ȱ�㣺1.�����Դ��� 2.��̳�˽�з���
//Child.prototype=new Parent();

//�Ƽ��̳�
//Child.prototype=Object.create(Parent.prototype);

//ʹ�ù��߷�����ɼ̳�
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
 * �ݹ�ĵ���inspect
 * showHidden �Ƿ�����
 * depth ����ĵݹ���ʾ���
 * colors �Ƿ���ʾ��ɫ
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