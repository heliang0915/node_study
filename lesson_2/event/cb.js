function Person() {
    this.name = "张三";
}

/**
 * new 对象经历了这三部分：
 * 1.创建一个空对象
 * 2.将空对象作为 this传递给Person对象
 * 3.返回这个对象
 * @type {Person}
 */
var p = new Person;
console.log(">>>" + p.name);