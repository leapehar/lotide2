// ASSERT EQUAL FUNCTION

const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed:${actual} !== ${expected}`);
  }
};

// COUNT LETTERS

// Solution 1

/*

const countLetters = function (sentence) {
  const letterCounts = {};

  for (let i = 0; i < sentence.length; i++) {
    //let startingCountForLetter = 0;
    if (sentence[i] !== " ") {
      //console.log(sentence[i]);
      if (letterCounts[sentence[i]]) {
        letterCounts[sentence[i]] += 1;
      } else {
        letterCounts[sentence[i]] = 1;
      }
    }
  }
  console.log(letterCounts);
};

*/

// Solution 2

const countLetters = function (sentence) {
  const letterCounts = {};

  for (const letter of sentence) {
    if (letter !== " ") {
      //console.log(sentence[letter]);

      //if the letter is not yet in the letterCounts object (undefined and therefore falsy), add it to the object and setting its value to 1
      if (!letterCounts[letter]) {
        letterCounts[letter] = 1;
      } else {
        //if the letter is in the letterCounts object, increment its value by 1
        letterCounts[letter] += 1;
      }
    }
  }
  console.log(letterCounts);
};
countLetters("hello world");
