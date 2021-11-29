const eqArrays = require('./eqArrays')
const assertArraysEqual = require('./assertArraysEqual')
//getting an undefined value from assertArraysEqual

//*********************************************************************** */


const middle = function (arr) {
  let result = [];

  if (arr.length < 2) {
    return result;
  }

  if (arr.length % 2 === 1) {
    let center = Math.floor(arr.length / 2);
    center += 1;
    // console.log("center index", center)
    result.push(center)
    return result
  }

  if (arr.length % 2 === 0 && arr.length > 2) {
    let center = Math.floor(arr.length / 2);
    result.push(center)
    center += 1;
    result.push(center)
    return result;
  }


}
module.exports = middle;
// console.log(middle([1, 2]))
// console.log(middle([1, 2, 3, 4, 5, 6, 7, 8, 9]))
// console.log(middle([1, 2, 3, 4, 5, 6, 7, 8]))
