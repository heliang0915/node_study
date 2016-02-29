var fs = require("fs");
var EventEmitter = require("events");
var person = {};
var eve = new EventEmitter();

eve.on('person', show);

fs.readFile("./name.txt", function (err, data) {
    person.name = data.toString();
    eve.emit("person");
});

fs.readFile("./age.txt", function (err, data) {
    person.age = data.toString();
    eve.emit("person");
});

//通过事件发射来监听事件
function show() {
    console.log("show");
   if (person.name && person.age) {
        console.log(person.name,person.age);
   }
}