var fs = require('fs');
var pt = require('path');

var path = process.argv[2];
var fil = '.' + process.argv[3].toString();

var list = fs.readdir(path, function (error, data) {
  var out = data.filter(function (file) {
    if(pt.extname(file) === fil ) return true;
    return false;
  });
  for(var i = 0; i < out.length; i++)
    console.log(out[i]);
});
