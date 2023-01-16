const path = require('path');
const { loadTestCasesFromYamlFile } = require('../../common/utils');
const { climbStairs } = require('./solution');

const filename = path.join(__dirname, 'test_cases.yml');

type TestCase = {
  n: number;
  expected: number;
};

describe('Climbing Stairs', () => {
  const testCases: TestCase[] = loadTestCasesFromYamlFile(filename);
  test.each(testCases)('Test Case %#', ({ n, expected }) => {
    expect(climbStairs(n)).toBe(expected);
  });
});
