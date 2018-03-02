#!/usr/local/bin/node
var fs = require('fs');
function str_pad(n) {
    return String("00" + n).slice(-2);
}
var dat = new Date();
var dir="testFiles";
for (var i=0; i<1000; ++i) {
    var y=dat.getFullYear();
    var m=dat.getMonth()+1;
    var d=dat.getDate();
    var datestring=""+y+("0"+m).slice(-2)+("0"+d).slice(-2);
    dat.setDate(dat.getDate() - 1);
    var filepath=dir+"/"+datestring+".demo.logfile.log";
    var fileContent=datestring;
    console.log(datestring)
    fs.writeFile(filepath, fileContent, (err) => {
        if (err) throw err;
    });
}
