/**
 * Created by lenovo on 2016/2/16.
 */
/**
 * 事件
 * 订阅/发布
 * **/

function Person(){
    this.name="";
    this._events={};

}

//注册事件
Person.prototype.on=function(eventName,callback){
    if(this._events[eventName]){
        this._events[eventName].push(callback);
    }else{
        this._events[eventName]=[callback];
    }
}

Person.prototype.once=function(eventName,callback){
    function onceCallback(){
        callback.apply(this,arguments);
        this.removeListener(eventName,onceCallback)
    }
     this.on(eventName,onceCallback);
}


Person.prototype.removeListener=function(eventName,callback){


}

Person.prototype.emit=function(eventName){
    var args=Array.prototype.slice.call(arguments,1);
    var callbacks=this._events[eventName];
    var _this=this;
    callbacks.forEach(function(callback){
        callback.apply(_this,args);
    });
}

var girl=new Person();

girl.on('长发齐腰',function(){
    console.log('娶你');
})

girl.on('长发齐腰',function(){
    console.log('记得来');
})
girl.emit('长发齐腰');


girl.once('18',function(style){
    console.log(style+"嫁给张三");
})
girl.once('18',function(style){
    console.log(style+"嫁给李四");
})
girl.once('18',function(style){
    console.log(style+"嫁给王五");
})


girl.emit('18','快乐的');
girl.emit('18','不快乐的');
girl.emit('18','不情愿的');