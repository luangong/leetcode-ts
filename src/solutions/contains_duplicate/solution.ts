/**
 * Checks whether there are duplicate numbers in the array.
 */
export function containsDuplicate(nums: number[]): boolean {
  return nums.length > (new Set(nums)).size;
}
