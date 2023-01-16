/*
 * First Missing Positive
 *
 * Given an unsorted integer array, find the smallest missing positive integer.
 *
 * Example 1:
 *   Input: [1, 2, 0]
 *   Output: 3
 *
 * Example 2:
 *   Input: [3, 4, -1, 1]
 *   Output: 2
 *
 * Example 3:
 *   Input: [7, 8, 9, 11, 12]
 *   Output: 1
 *
 * Note:
 *   - Your algorithm should run in O(n) time and uses constant extra space.
 *
 * Accepted: 191,117
 * Submissions: 678,041
 */

function firstMissingPositive(nums: number[]): number {
  nums.forEach((num, i) => {
    if (num <= 0) {
      nums[i] = nums.length + 1;
    }
  });

  nums.forEach(num => {
    if (1 <= Math.abs(num) && Math.abs(num) <= nums.length) {
      const index = Math.abs(num) - 1;
      nums[index] = -Math.abs(nums[index]);
    }
  });

  return nums.findIndex(num => num > 0) + 1 || nums.length + 1;
}

module.exports = {
  firstMissingPositive,
};
