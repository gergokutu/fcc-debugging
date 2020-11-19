// Use typeof
let seven = 7;
console.log(typeof seven);
let three = "3";
console.log(typeof three);
console.log(seven + three);

// Catch mispelling and missing brackets...
let myArray = [1, 2, 3];
let arraySum = myArray.reduce((previous, current) => previous + current);
console.log(`Sum of array values is: ${arraySum}`);

// Assignment operator instead of equality operator
let x = 7;
let y = 9;
let result;

if (x === y) {
  result = "Equal!";
} else {
  result = "Not equal!";
}

console.log(result);

// Misschanged param order
function raiseToPower(b, e) {
  return Math.pow(b, e);
}

let base = 2;
let exp = 3;
let power = raiseToPower(base, exp);
console.log(power);

// Indexing errors
function countToFive() {
  let firstFive = "12345";
  let len = firstFive.length;
  // Only change code below this line
  for (let i = 0; i < len; i++) {
    // Only change code above this line
    console.log(firstFive[i]);
  }
}

countToFive();