// IMPORTS

const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');

//TEST CASES FOR EQARRAYS

console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false

console.log(eqArrays([1, 2, 3], [1, 2])); // false

console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true

console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false

//ASSERTION TEST CASES

console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true)); // => should PASS

console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), false)); // => should FAIL

console.log(assertEqual(eqArrays([1, 2, 3], ["1", "2", "3"]), true)); // => should FAIL

console.log(assertEqual(eqArrays([1, 2, 3], ["1", "2", "3"]), false)); // => should PASS