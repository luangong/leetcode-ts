const path = require('path');
const { loadTestCasesFromYamlFile } = require('../../common/utils');
const { singleNumber } = require('./solution');

type TestCase = {
  nums: number[];
  expected: number;
};

const filename = path.join(__dirname, 'test_cases.yml');

describe('Single Number', () => {
  const testCases: TestCase[] = loadTestCasesFromYamlFile(filename);

  test.each(testCases)('Test Case %#', ({ nums, expected }) => {
    expect(singleNumber(nums)).toEqual(expected);
  });
});
