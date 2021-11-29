const assert = require('chai').assert;
const eqArrays = require('../eqArrays')
const assertArraysEqual = require('../assertArraysEqual')
const middle = require('../middle')


describe("#middle", () => {
  it("shoud return [5] for [1, 2, 3, 4, 5, 6, 7, 8, 9]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9]), [5])
  })
})

// console.log(assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9]), [5]))