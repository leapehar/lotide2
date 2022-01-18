// IMPORTS

const assertEqual = require('./assertEqual');



// TAIL FUNCTION

const tail = function(arr) {
  let headlessArr = arr.slice(1);
  return headlessArr;

};

module.exports = tail;











