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

// LETTER POSITIONS FUNCTION

const letterPositions = function (sentence) {
  const results = {};
  // logic to update results here
  for (let i = 0; i < sentence.length; i++) {
    //console.log(sentence[i]);
    if (sentence[i] !== " ") {
      if (!results[sentence[i]]) {
        results[sentence[i]] = [i];
      } else if (results[sentence[i]]) {
        results[sentence[i]].push(i);
      }
    }
  }
  console.log(results);
  return results;
};

// TEST CASES

letterPositions("lighthouse in the house");
letterPositions("hello");

assertArraysEqual(letterPositions("hello").h, [0]);
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello").l, [2, 3]);
assertArraysEqual(letterPositions("hello").o, [4]);
