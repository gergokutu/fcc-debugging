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