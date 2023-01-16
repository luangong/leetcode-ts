/**
 * 1. Two Sum
 *
 * Given an array of integers `nums` and an integer `target`, return indices of the two
 * numbers such that they add up to `target`.
 *
 * You may assume that each input would have exactly one solution, and you may not use the
 * same element twice.
 *
 * You can return the answer in any order.
 */

const twoSum = function(nums: number[], target: number): [number, number] {
  const indices = nums.map((num, i) => ({ value: num, index: i }));
  indices.sort((a, b) => a.value - b.value);
  for (let i = 0, j = nums.length - 1; i < j;) {
    if (indices[i].value + indices[j].value < target) {
      i++;
    } else if (indices[i].value + indices[j].value > target) {
      j--;
    } else {
      return [indices[i].index, indices[j].index];
    }
  }
  return [-1, -1];
};

const twoSum2 = function(nums: number[], target: number): [number, number] {
  const indices = {};
  for (let i = 0; i < nums.length; i++) {
    const rest = target - nums[i];
    if (rest in indices) {
      return [indices[rest], i];
    }
    indices[nums[i]] = i;
  }
  return [-1, -1];
};

module.exports = {
  twoSum,
  twoSum2,
};
