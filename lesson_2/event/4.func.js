
function say(name,word){
    console.log(name,":"+word);
}

say("张三","你好");
say("张三","很你好");


var newSay=say.bind(this,'张三');



newSay("你好");
newSay("很你好");


function eat(timer,callback){

}

var newEat=eat(5, function () {
    console.log("5次");
});
newEat();
newEat();
newEat();
newEat();
newEat();