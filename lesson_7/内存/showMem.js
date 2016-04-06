var process = require('process');
var os = require("os");
var showMem = function () {
    var mem = process.memoryUsage();
    var computerMem = os.totalmem();
    var freeMem=os.freemem();
    var format = function (bytes) {
        var size = 0;
        if (bytes > 1024 * 1024 * 1024) {
            size = (bytes / 1024 / 1024 / 1024).toFixed(2) + "GB"
        } else if (bytes > 1024 * 1024) {
            size = (bytes / 1024 / 1024).toFixed(2) + "MB"
        } else if (bytes > 1024) {
            size = (bytes / 1024).toFixed(2) + "KB"
        } else {
            size = bytes + "B"
        }
        return size;
    }

    console.log("rss:" + format(mem.rss) + "  heapTotal: " + format(mem.heapTotal) + "  heapUsed :" + format(mem.heapUsed));
    //os
    console.log("系统内存总量:" + format(computerMem));
    console.log("系统可用内存:" + format(freeMem));

}

showMem();