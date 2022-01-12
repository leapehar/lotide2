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

// WITHOUT FUNCTION

// SOLUTION 1

const without = function (source, itemsToRemove) {
  const finalArray = [];
  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) {
      finalArray.push(source[i]);
    }
  }
  return finalArray;
};

// SOLUTION 2

// const without = function (source, itemsToRemove) {
//   const finalArray = [];
//   for (let i = 0; i < source.length; i++) {
//     let elementsMatched = false;
//     for (let j = 0; j < itemsToRemove.length; j++) {
//       if (source[i] === itemsToRemove[j]) {
//         elementsMatched = true;
//       }
//     }
//     if (!elementsMatched) {
//       finalArray.push(source[i]);
//     }
//   }
//   return finalArray;
// };

// TEST CASES

console.log(without([1, 2, 3, 4], [2, 4, 6, 8]));

console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]

// testing to make sure the without function should be returning a new array and not modify the original array that is passed in

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
