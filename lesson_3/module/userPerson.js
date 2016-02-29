/**
 * Created by lenovo on 2016/2/24.
 */
var p=require("./person");
console.log('wellcome');
exports.getName=function(well){
    return p.name+well;
};