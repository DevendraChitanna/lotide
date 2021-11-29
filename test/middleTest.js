const eqArrays = require('../eqArrays')
const assertArraysEqual = require('../assertArraysEqual')
const middle = require('../middle')

console.log(assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9]), [5]))