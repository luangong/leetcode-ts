const { loadTestCases  } = require('../../common/utils');
const { containsDuplicate, containsDuplicate2 } = require('./solution');

type TestCase = {
  nums: number[];
  expected: boolean;
};

describe('Contains Duplicate', () => {
  describe('Solution 1', () => {
    const testCases: TestCase[] = loadTestCases(__dirname);

    test.each(testCases)('Test Case %#', ({ nums, expected }) => {
      expect(containsDuplicate(nums)).toEqual(expected);
    });
  });

  describe('Solution 2', () => {
    const testCases: TestCase[] = loadTestCases(__dirname);

    test.each(testCases)('Test Case %#', ({ nums, expected }) => {
      expect(containsDuplicate2(nums)).toEqual(expected);
    });
  });
});
