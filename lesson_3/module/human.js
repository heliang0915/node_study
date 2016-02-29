/**
 * Created by lenovo on 2016/2/24.
 */
console.log("111");
var Human = function (name, age) {
    this._name = name;
    this._age = age;
}
Human.prototype.getName = function () {
    return this._name;
}

Human.prototype.setName = function (name) {
    return this._name = name;
}
Human.prototype.getAge = function () {
    return this._age;
}
Human.prototype.setAge = function (age) {
    return this._age = age;
}

Human.prototype.home = '±±¾©';

module.exports=exports=Human;