var a = 1, b = 2, c = 3;

(function firstFunction(){
  b = 8;
  c = 6;

  (function secondFunction(){
    var b = 8;

    (function thirdFunction(){
      var a = 7, c = 9;

      (function fourthFunction(){
        a = 1;
        var c = 8;

      })();
    })();
  })();
})();

console.log("a: " + a + ", b: " + b + ",c: " + c);