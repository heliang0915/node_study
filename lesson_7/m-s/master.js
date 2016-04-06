var fork=require('child_process').fork;
var cups=require("os").cpus();

for(var i=0;i<cups.length;i++){
    fork('./m-s/worker.js');
}

