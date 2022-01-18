const middle = require('../middle');
// const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');


// TEST CODE

console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []

console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]
console.log(middle([10, 22, 35, 42, 5000, 32, 53])); // => [42]

console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]

middle([1]); // => []
middle([1, 2]); // => []
middle([1, 2, 3]); // => [2]
middle([1, 2, 3, 4, 5]); // => [3]
middle([1, 2, 3, 4]); // => [2, 3]
middle([1, 2, 3, 4, 5, 6]); // => [3, 4]

console.log(assertArraysEqual(middle([1, 2, 3, 4]), ([2, 3])))
console.log(assertArraysEqual(middle([1, 2, 3, 4, 6, 7]), ([3, 4])))
console.log(assertArraysEqual(middle([1, 2, 3, 4, 6]), ([3])))
console.log(assertArraysEqual(middle([1]), ([])))