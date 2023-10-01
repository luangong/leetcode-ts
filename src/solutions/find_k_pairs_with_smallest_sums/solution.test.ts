import { loadTestCases } from '../../common/utils';
import { kSmallestPairs, kSmallestPairs2, kSmallestPairs3 } from './solution';

type TestCase = {
  nums1: number[];
  nums2: number[];
  k: number;
  expected: [number, number][];
};

describe('Find K Pairs with Smallest Sums', () => {
  describe.skip('Solution 1', () => {
    const testCases: TestCase[] = loadTestCases(__dirname);

    test.each(testCases)('Test Case %#', ({ nums1, nums2, k, expected }) => {
      expect(kSmallestPairs(nums1, nums2, k)).toEqual(expected);
    });
  });

  describe.skip('Solution 2', () => {
    const testCases: TestCase[] = loadTestCases(__dirname);

    test.each(testCases)('Test Case %#', ({ nums1, nums2, k, expected }) => {
      expect(kSmallestPairs2(nums1, nums2, k)).toEqual(expected);
    });
  });

  describe.skip('Solution 3', () => {
    const testCases: TestCase[] = loadTestCases(__dirname);

    test.each(testCases)('Test Case %#', ({ nums1, nums2, k, expected }) => {
      expect(kSmallestPairs3(nums1, nums2, k)).toEqual(expected);
    });
  });
});
