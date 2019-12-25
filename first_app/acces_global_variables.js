
let a = 0;
{
  let b = 1;

  let f = function(){
    let c = 2
  }

  {
    let d = 3;

    console.log("Variable a ", a);
    console.log("Variable b ", b);
    // console.log("Variable c ", c);
    console.log("Variable d ", d);
    console.log("Variable f ", f);
  }

}

