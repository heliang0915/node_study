/**
 * Created by lenovo on 2016/2/24.
 */
var p=require("./person");

//console.log(require);
console.log(require.cache);
console.log(require.resolve("./person"));
delete require.cache[require.resolve("./person")]
var p=require("./person");


console.log(p.name);
var json=require("./json");
console.log(json);

//console.trace();
