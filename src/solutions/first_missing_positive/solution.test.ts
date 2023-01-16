const { loadTestCases  } = require('../../common/utils');
const { firstMissingPositive } = require('./solution');

type TestCase = {
  nums: number[];
  expected: number;
};

describe('First Missing Positive', () => {
  const testCases: TestCase[] = loadTestCases(__dirname);

  test.each(testCases)('Test Case %#', ({ nums, expected }) => {
    expect(firstMissingPositive(nums)).toBe(expected);
  })
});
