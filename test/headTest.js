// IMPORTS 
const head = require('../head');
const assertEqual = require('../assertEqual');


// TEST CASES FOR HEAD FUNCTION
head([1, 2, 3]);
head([100, 2, 3]);
head([]);
head([4]);

// TEST CASES FOR ASSERT EQUAL WITH HEAD FUCNTION CALL AS AN ARGUMENT

// PASSING
assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

//FAILING
assertEqual(head([100, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "HIIIIII");