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

// EQOBJECTS FUNCTION

const eqObjects = function (object1, object2) {
  console.log(
    "OBJECTS:",
    Object.keys(object1).length,
    Object.keys(object2).length
  );
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (const key of Object.keys(object1)) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else {
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
  }
  return true;
};

// ASSERT OBJECTS EQUAL FUNCTION

const assertObjectsEqual = function (actual, expected) {
  // Implement me!
  console.log("INFO", actual, expected);
  const inspect = require("util").inspect;

  let equalObjects = eqObjects(actual, expected);

  if (equalObjects) {
    console.log(
      `✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`
    );
  } else {
    console.log(
      `🛑🛑🛑 Assertion Failed:${inspect(actual)} !== ${inspect(expected)}`
    );
  }
};

// TEST CASES

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };

const other = { d: ["2", 3], c: "1", f: "other" };

console.log("THIS ONE", assertObjectsEqual(cd, other));
console.log("THIS ONE", assertObjectsEqual(cd, dc));
