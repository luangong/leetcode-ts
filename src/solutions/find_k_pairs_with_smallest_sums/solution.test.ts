const { loadTestCases } = require('../../common/utils');
const { kSmallestPairs2 } = require('./solution');

type TestCase = {
  nums1: number[];
  nums2: number[];
  k: number;
  expected: number[][];
};

describe('Find K Pairs with Smallest Sums', () => {
  describe.skip('Solution 1', () => {
    const testCases: TestCase[] = loadTestCases(__dirname);

    test.each(testCases)('Test Case %#', ({ nums1, nums2, k, expected }) => {
      expect(kSmallestPairs(nums1, nums2, k)).toEqual(expected);
    });
  });

  describe('Solution 2', () => {
    const testCases: TestCase[] = loadTestCases(__dirname);

    test.each(testCases)('Test Case %#', ({ nums1, nums2, k, expected }) => {
      expect(kSmallestPairs2(nums1, nums2, k)).toEqual(expected);
    });
  });
});
