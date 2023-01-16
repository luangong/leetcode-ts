/**
 * Checks whether there are duplicate numbers in the array.
 */
function containsDuplicate(nums: number[]): boolean {
  return nums.length > (new Set(nums)).size;
}

function containsDuplicate2(nums: number[]): boolean {
  return nums.length > (new Set(nums)).size;
}

module.exports = {
  containsDuplicate,
  containsDuplicate2,
};
