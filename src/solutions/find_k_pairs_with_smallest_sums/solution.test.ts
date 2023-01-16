const path = require('path');
const { loadTestCasesFromYamlFile } = require('../../common/utils');
const { kSmallestPairs2 } = require('./solution');

type TestCase = {
  nums1: number[];
  nums2: number[];
  k: number;
  expected: number[][];
};

const filename = path.join(__dirname, 'test_cases.yml');

// describe('Find K Pairs with Smallest Sums Solution 1', () => {
//   const testCases: TestCase[] = loadTestCasesFromYamlFile(filename);

//   test.each(testCases)('Test Case %#', ({ nums1, nums2, k, expected }) => {
//     expect(kSmallestPairs(nums1, nums2, k)).toEqual(expected);
//   });
// });

describe('Find K Pairs with Smallest Sums Solution 2', () => {
  const testCases: TestCase[] = loadTestCasesFromYamlFile(filename);

  test.each(testCases)('Test Case %#', ({ nums1, nums2, k, expected }) => {
    expect(kSmallestPairs2(nums1, nums2, k)).toEqual(expected);
  });
});
