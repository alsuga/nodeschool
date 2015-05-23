var fs = require('fs');
var file = process.argv[2];

var content = fs.readFile(file, function (error, data) {
  var out = data.toString().split('\n').length - 1;
  console.log(out);
});
