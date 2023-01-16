/*
Single Number II

Given an array of integers, every element appears three times except for one.
Find that single one.

Note:
Your algorithm should have a linear runtime complexity.  Could you implement it
without using extra memory?

Tags: Bit Manipulation
*/

function singleNumber(nums: number[]): number {
  let single = 0;
  for (let i = 0; i < 32; i++) {
    let numOnes = 0;
    for (const num of nums) {
      numOnes += (num >> i) & 1;
    }
    single |= (numOnes % 3) << i;
  }
  return single;
};

module.exports = {
  singleNumber,
};
