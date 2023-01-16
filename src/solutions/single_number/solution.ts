function singleNumber(nums: number[]): number {
  return nums.reduce((accumulator, num) => accumulator ^ num);
}

module.exports = {
  singleNumber,
};
