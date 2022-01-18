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

const middle = function(arr) {
  const newArr = [];
  const middleIndex = Math.floor(arr.length / 2);
  if (arr.length <= 2) {
    return newArr;
  }
  if (arr.length > 2 && arr.length % 2 !== 0) {
    newArr.push(arr[middleIndex]);
    return newArr;
  }
  if (arr.length > 2 && arr.length % 2 === 0) {
    newArr.push(arr[middleIndex - 1], arr[middleIndex]);
    return newArr;
  }

};


module.exports = middle;