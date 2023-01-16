const path = require('path');
const { loadTestCasesFromYamlFile } = require('../../common/utils');
const { firstMissingPositive } = require('./solution');

const filename = path.join(__dirname, 'test_cases.yml');

type TestCase = {
  nums: number[];
  expected: number;
};

describe('First Missing Positive', () => {
  const testCases: TestCase[] = loadTestCasesFromYamlFile(filename);

  test.each(testCases)('Test Case %#', ({ nums, expected }) => {
    expect(firstMissingPositive(nums)).toBe(expected);
  })
});
