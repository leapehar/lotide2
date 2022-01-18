# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @leapehar/lotide`

**Require it:**

`const _ = require('@leapehar/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(...)`: returns the head of an array

* `tail(...)`: returns the tail of an array

* `middle(...)`: returns the middle of an array

* `assertArraysEqual()`: takes in two arrays as arguments and returns a string saying whether or not the two arrays are equal.

* `assertEqual()`: compares the actual results from a given function and the expected results

* `assertObjectsEqual()`: takes two objects as arguments, and returns a string saying whether or not the two arrays are equal.

* `countLetters(string)`: returns count of each character in a string in the form of an object.

* `countOnly()`: counts the amount of specified items in a given array. Takes an array as its first argument, and an object as its second argument. The object should specify as its key the array value to be counted, and a boolean an the corresponding value. Ex. countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false })

* `eqArrays()`: compares two arrays and returns boolean.

* `eqObjects()`: compares two onjects and returns boolean.

* `findKey(object, callback)`: Takes in an object and a callback. Returns the first key for which the callback returns a truthy value. If no key is found, it returns undefined.

* `findKeyByValue(object, value)`: Finds an object's key by its value. Takes an object and the value in the object that you are trying to find as arguments.

* `letterPositions(string)`: returns the indexes of each character in a in an object.

* `map()`: Takes in two arguments: An array to map and A callback function. Returns a new array based on the results of the callback function.

* `takeUntil()`: Takes in two parameters: The array to work with and a callback function. Returns a "slice of the array with elements taken from the beginning.

* `without()`: Returns a subset of a given array with unwanted elements removed.