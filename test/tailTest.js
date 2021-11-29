const assert = require('chai').assert;
const assertEqual = require('../assertEqual');
const tail = require('../tail');


describe("#tail", () => {
  it("shoud return 3 for [\"Yo Yo\", \"Lighthouse\", \"Labs\"]", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    assert.strictEqual(words.length, 3)
  })
})

