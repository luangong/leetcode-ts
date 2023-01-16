const { loadTestCases } = require('../../common/utils');
const { twoSum, twoSum2 } = require('./solution');

type TestCase = {
  nums: number[];
  target: number;
  expected: [number, number];
};

// For test isolation, we should not share the reference to test cases among different
// test suites since theoretically the solution code could modify the test case data
describe('Two Sum', () => {
  describe('Solution 1', () => {
    const testCases: TestCase[] = loadTestCases(__dirname);

    // https://jestjs.io/docs/api#testeachtablename-fn-timeout
    test.each(testCases)('Test Case %#', ({ nums, target, expected }) => {
      // The solution may return the indices in any order
      expect(twoSum(nums, target)).toIncludeSameMembers(expected);
    });
  });

  describe('Solution 2', () => {
    const testCases: TestCase[] = loadTestCases(__dirname);

    test.each(testCases)('Test Case %#', ({ nums, target, expected }) => {
      expect(twoSum2(nums, target)).toEqual(expected);
    });
  });
});
