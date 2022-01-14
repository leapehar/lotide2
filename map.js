// TESTER FUNCTIONS

// EQARRAYS FUNCTION

const eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

// EQARRAYSEQUAL FUNCTION

const assertArraysEqual = function (arr1, arr2) {
  let equalArrays = eqArrays(arr1, arr2);

  if (equalArrays) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed:${arr1} !== ${arr2}`);
  }
};

// The map function will return a new array based on the results of the callback function.

const map = function (array, callback) {
  const results = [];

  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, (word) => word[0]);
console.log(results1);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const double = map(numbers, (nums) => nums * 2);

const capitalize = map(words, (word) => word.toUpperCase());

// TEST CASES

assertArraysEqual(results1, ["g", "c", "t", "m", "t"]);
assertArraysEqual(double, [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]);
assertArraysEqual(capitalize, ["GROUND", "CONTROL", "TO", "MAJOR", "TOM"]);
