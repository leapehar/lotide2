// ASSERT EQUALS FUNCTION
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed:${actual} !== ${expected}`);
  }
};

// FIND KEY BY VALUE FUNCTION

const findKeyByValue = function (obj, value) {
  for (let genre of Object.keys(obj)) {
    if (obj[genre] === value) {
      //console.log(genre);
      return genre;
    }
  }
  return undefined;
};

// TEST CASES

const menu = {
  breakfast: "Grand Slam",
  lunch: "Burger and Fries",
  dinner: "Steak and Shrimp",
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};

console.log(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"));
console.log(findKeyByValue(menu, "Grand Slam")); // => breakfast
console.log(findKeyByValue(menu, "Steak and Shrimp")); // => dinner

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

assertEqual(findKeyByValue(menu, "Grand Slam"), "breakfast");
assertEqual(findKeyByValue(menu, "Steak and Shrimp"), "dinner");
