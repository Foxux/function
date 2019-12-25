
var a = 0;
 {
  var b = 1;
 
  var f = function(){
      var c = 2;
      console.log("Variable c ", c);
      return c;
    }
 
    {
      var d = 3;
    }
 
 }
 c1 = f()
 
 console.log("Variable a ", a);
 console.log("Variable b ", b);
 console.log("Variable c1 ", c1);
//  console.log("Variable c ", c);
 console.log("Variable d ", d);