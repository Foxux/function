// class Cat {

//   constructor() {
//     console.log('Called constructor');
//     this._legs = 4;
//     this._voice_command = 'Meow';
//   }

//   get legs() {
//     return this._legs;
//   }

//   set legs(count) {
//     this._legs = count;
//   }

//   voice() {
//     console.log(this._voice_command);
//   }
// }

function Cat(color) {
  let private = 10;

  this.color = color;

  this.getPrivate = function () {
    return private * 10;
  }


  this.setPrivate = function (x) {
    return private = x / 10;
  }

  return this;
}


let priv = new Cat("Red");
// console.log(priv.private); 
console.log(priv.getPrivate()); 
priv.setPrivate(500)
// priv.private = 8888888888888;
// console.log(priv.private); 
console.log(priv.getPrivate()); 


let priv2 = new Cat("Blue");

priv2.setPrivate(400);
console.log("New", priv.getPrivate()); 


console.log(priv.color); 
console.log(priv2.color); 

console.log(priv2 === priv); 



// let cat = new Cat();
// cat.voice()
