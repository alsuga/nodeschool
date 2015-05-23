var cw = require('./makeItModularMd');

pv = process.argv;

cw(pv[2], pv[3], function (err, data) {
  if(err)
    throw err;
  data.forEach(function(dt){
    console.log(dt);
  });
});
