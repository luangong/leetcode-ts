const path = require('path');
const { loadTestCasesFromYamlFile } = require('../../common/utils');
const { twoSum, twoSum2 } = require('./solution');

type TestCase = {
  nums: number[];
  target: number;
  expected: [number, number];
};

const filename = path.join(__dirname, 'test_cases.yml');

// For test isolation, we should not share the reference to test cases among different
// test suites since theoretically the solution code could modify the test case data
describe('Two Sum', () => {
  describe('Two Sum Solution 1', () => {
    const testCases: TestCase[] = loadTestCasesFromYamlFile(filename);

    // https://jestjs.io/docs/api#testeachtablename-fn-timeout
    test.each(testCases)('Test Case %#', ({ nums, target, expected }) => {
      // The solution may return the indices in any order
      expect(twoSum(nums, target)).toIncludeSameMembers(expected);
    });
  });

  describe('Two Sum Solution 2', () => {
    const testCases: TestCase[] = loadTestCasesFromYamlFile(filename);

    test.each(testCases)('Test Case %#', ({ nums, target, expected }) => {
      expect(twoSum2(nums, target)).toEqual(expected);
    });
  });
});
