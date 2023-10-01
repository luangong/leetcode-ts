// https://leetcode.com/problems/single-number/

export function singleNumber(nums: number[]): number {
  return nums.reduce((accumulator, num) => accumulator ^ num);
}
