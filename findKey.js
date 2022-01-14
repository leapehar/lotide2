// ASSERT EQUAL FUNCTION
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed:${actual} !== ${expected}`);
  }
};

const findKey = function (object, callback) {
  for (const key in object) {
    console.log(key);
    if (callback(object[key])) {
      console.log(key);
      return key;
    }
  }
};

const result1 = findKey(
  {
    "Blue Hill": { stars: 1 },
    Akaleri: { stars: 3 },
    noma: { stars: 2 },
    elBulli: { stars: 3 },
    Ora: { stars: 2 },
    Akelarre: { stars: 3 },
  },
  (x) => x.stars === 2 // x = { stars: 2 }
); // => "noma"
// console.log(result1);

const result2 = findKey(
  {
    canada: "ottawa",
    germany: "berlin",
    australia: "canberra",
  },
  (country) => country
);

// TEST CASES

assertEqual(result1, "noma");
assertEqual(result2, "canada");
