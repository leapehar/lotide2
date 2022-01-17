const tail = require('../tail');
const assertEqual = require('../assertEqual');

// TAIL FUNCTION TEST CASES

tail([2, 5, 3, 7, 6]);
tail([10, 20, 30, 40]);
tail([4]);
tail([]);


// TEST CASES USING ASSERT EQUAL

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

assertEqual(words[0], "Yo Yo");
assertEqual(words[1], "Lighthouse");
assertEqual(words[2], "Labs");