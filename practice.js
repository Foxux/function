

function getPlus(a,b){
  return a + b;
}

function getMinus(a,b){
  return a - b;
}

function getMulti(a,b){
  return a * b;
}
function getDivision(a,b){
  return a / b;
}
function getMode(a,b){
  return a % b;
}

function calcFunc(x1, x2, x3, x4, x5, x6, x7, x8){
  let sumOfSumAndMinus = getPlus(getPlus(x1, x2), getMinus(x3, x4)); 
  let multi = getMulti(x5, x6);
  let mod = getMode(x7, x8);

  let allSums = getPlus(sumOfSumAndMinus, multi);
  let result = getDivision(allSums, mod);

   return result;
}


let result = 0;

// BlackBoxTesting
result = calcFunc(1, 2, 3, 4, 5, 6, 9, 2);
console.log("Test 1 should be 32", result === 32);


result = calcFunc(1, 2, 1, 2, 1, 2, 1, 2);
console.log("Test 1 should be 4", result === 4);


result = calcFunc(1, 2, 1, 2, 1, 2, 1, 1);
console.log("Test 1 should be Infinity", result === Infinity);


result = calcFunc('test', 2, 1, 2, 1, 2, 1, 1);
console.log("Test 1 should be NaN", isNaN(result) );

// WhiteBoxTesting
// function getPlus(a,b){
//   return 1;
// }
// result = calcFunc(1, 2, 3, 4, 5, 6, 9, 2);
// console.log("WHITEBOX Test 1 should be 32", result === 1);
