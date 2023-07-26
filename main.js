const _ = require("lodash");
const assert = require("assert");

/**
 * Build a simple terminal app that uses at least 5 lodash methods.
 * Use fake data or APIs you have worked with in previous projects or google fake data you can use. - [ ] Either make a fetch or save it in a few variables.
 * Console.log the output of each lodash method called on the fake data.
 * Use at least these methods: _.chunk(), _.reverse(), _.without(), _.shuffle().
 * Create unit tests with Mocha for each function you build.
 */

let nums = [45, 72, 89, 22, 63, 2, 16, 87];
// console.log('Input nums array:', nums);

let chunkedNums = _.chunk(_.clone(nums), 4);
console.log(chunkedNums);

let reversedNums = _.reverse(_.clone(nums));
console.log(reversedNums);

let withoutNums = _.without(_.clone(nums), 45);
console.log(withoutNums);

let shuffledNums = _.shuffle(_.clone(nums));
console.log(shuffledNums);

let reducedNums = _.reduce(
  nums,
  (sum, n) => {
    return sum + n;
  },
  0
);
console.log(reducedNums);

//tests
if (typeof describe === "function") {
  describe("Lodash tests", function () {
    it("should chuck the input nums array into separate arrays", function () {
      let chunkedNums = _.chunk(_.clone(nums), 4);
      assert.deepStrictEqual(chunkedNums, [
        [45, 72, 89, 22],
        [63, 2, 16, 87],
      ]);
    });
    it("should reverse the input array", function () {
      let reversedNums = _.reverse(_.clone(nums));
      assert.deepStrictEqual(reversedNums, [87, 16, 2, 63, 22, 89, 72, 45]);
    });
    it("should create a new array without a given value", function () {
      let withoutNums = _.without(_.clone(nums), 45);
      assert.deepStrictEqual(withoutNums, [72, 89, 22, 63, 2, 16, 87]);
    });
    it("should shuffle the given array", function () {
      let shuffledNums = _.shuffle(nums);
      assert.notDeepEqual(shuffledNums, nums);
    });
    it("should reduce the given array", function () {
        let reducedNum = _.reduce(nums, (sum, n) => {
            return sum + n;
          }, 0);
          assert.strictEqual(reducedNum, 396);
    });
  });
}

// **********************************************************************************************************************************

let animals = ["zebra", "koala", "rat", "cassawary", "kiwi", "cat", "elephant"];

let chunkedAnimals = _.chunk(_.clone(animals), 2);
console.log(chunkedAnimals);

let reversedAnimals = _.clone(animals).reverse();
console.log(reversedAnimals);

let withoutAnimals = _.without(animals, "rat");
console.log(withoutAnimals);

let shuffledAnimals = _.shuffle(animals);
console.log(shuffledAnimals);

let lastIndexOfAnimals = _.lastIndexOf(animals, "cat");
console.log(lastIndexOfAnimals);

//tests
if (typeof describe === "function") {
  describe("Lodash tests", function () {
    it("should chuck the input array into separate arrays", function () {
      let chunkedAnimals = _.chunk(animals, 2);
      assert.equal(chunkedAnimals[0][1], "koala");
    }); //end of if function and condition

    it("should reverse the input array", function () {
      let reversedAnimals = _.reverse(animals);
      assert.equal(reversedAnimals[0], "elephant");
    });
    it("should create a new array without a given value", function () {
      let withoutAnimals = _.without(animals, "rat");
      assert.equal(withoutAnimals.includes("rat"), false);
    });
    it("should shuffle the given array", function () {
      let shuffledAnimals = _.shuffle(animals);
      assert.notDeepEqual(shuffledAnimals, animals);
    });
    it("should return the last index of the array", function () {
      let lastIndexOfAnimals = _.lastIndexOf(animals, "cat");
      assert.equal(lastIndexOfAnimals, 1);
    });
  }); //end of describe function and condition
} //end of if function
