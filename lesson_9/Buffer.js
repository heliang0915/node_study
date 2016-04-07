var fs = require('fs');


var str = "深入nodejs";
var buf = new Buffer(str, 'utf8');

console.log(buf);
console.log(buf.toString("utf8"));


var rs = fs.createReadStream('readme', {highWaterMark: 11});
rs.setEncoding('utf8');
var result = "";
rs.on('data', function (chunk) {
    result += chunk;
})

rs.on('end', function () {
    console.log(result);
})


