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

// MIDDLE FUNCTION

// Solution 1

/*

const middle = function (arr) {
  let middleElement = 0;
  let newArr = [];
  if (arr.length <= 2) {
    console.log(newArr);
    return newArr;
  } else if (arr.length % 2 === 1) {
    let middleIndex = Math.ceil(arr.length / 2);
    //console.log(middleIndex);
    middleElement = arr[middleIndex - 1];
    //console.log(middleElement);
    newArr.push(middleElement);
    console.log(newArr);
    return newArr;
  } else {
    //console.log(arr.length / 2);
    let firstMiddleIndex = arr.length / 2;
    let firstMiddleElement = arr[firstMiddleIndex - 1];
    //console.log(firstMiddleElement);

    //console.log(firstMiddleIndex);
    let secondMiddleIndex = arr.length / 2 + 1;
    let secondMiddleElement = arr[secondMiddleIndex - 1];
    //console.log(secondMiddleElement);

    newArr.push(firstMiddleElement, secondMiddleElement);
    console.log(newArr);
    return newArr;
  }
};

*/

// Solution 2

const middle = function (arr) {
  const newArr = [];
  const middleIndex = Math.floor(arr.length / 2);
  //console.log(middleIndex);
  if (arr.length <= 2) {
    // console.log(newArr);
    return newArr;
  }
  if (arr.length > 2 && arr.length % 2 !== 0) {
    //console.log(arr[middleIndex]);
    newArr.push(arr[middleIndex]);
    return newArr;
    //console.log(newArr);
  }
  if (arr.length > 2 && arr.length % 2 === 0) {
    //console.log(arr[middleIndex - 1], arr[middleIndex]);
    newArr.push(arr[middleIndex - 1], arr[middleIndex]);
    return newArr;
    //console.log(newArr);
  }
  //console.log(newArr);
  //return newArr;
};

// TEST CODE

console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []

console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]
console.log(middle([10, 22, 35, 42, 5000, 32, 53])); // => [42]

console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]

// middle([1]); // => []
// middle([1, 2]); // => []
// middle([1, 2, 3]); // => [2]
// middle([1, 2, 3, 4, 5]); // => [3]
// middle([1, 2, 3, 4]); // => [2, 3]
// middle([1, 2, 3, 4, 5, 6]); // => [3, 4]
