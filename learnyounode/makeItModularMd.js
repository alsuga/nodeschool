var fs = require('fs');
var pt = require('path');

module.exports = function (path, fil, callback) {
  fs.readdir(path, function (error, data) {
    if(error)
      return callback(error);
    var out = data.filter(function (file) {
      if(pt.extname(file) === ('.'+fil) ) return true;
      return false;
    });
    callback(null, out);
  });
};
