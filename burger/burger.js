
/**
 * Class Burger
 * @param {Number} size 
 */
function Burger() {
  this.cost = 100;
  this.callories = 40;
}

/**
 * this method return cost of the burger
 */
Burger.prototype.getPrice = function () {
  return this.cost;
}
/**
 * this method return callories of the burger
 */
Burger.prototype.getCallories = function () {
  return this.callories;
}


let burger = new Burger();
console.log('the price of the big burger is  ', burger.getPrice());
console.log('the callories of the big burger is ', burger.getCallories());
console.log(burger instanceof Burger)




function BurgerLittle() {
  // Burger.call(this);
  this.cost = 50;
  this.callories = 20;
}
BurgerLittle.prototype = Object.create(Burger.prototype);
let burgerLittle = new BurgerLittle();
console.log('the price of the little burger is  ', burgerLittle.getPrice());
console.log('the callories of the little burger is ', burgerLittle.getCallories());
console.log(burgerLittle instanceof Burger)
console.log(burgerLittle instanceof BurgerLittle)

BurgerLittle.prototype.getTrash = 6;

console.log(burger.getTrash)
console.log(burgerLittle.getTrash)