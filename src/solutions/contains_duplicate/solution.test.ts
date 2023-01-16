const path = require('path');
const { loadTestCasesFromYamlFile } = require('../../common/utils');
const { containsDuplicate, containsDuplicate2 } = require('./solution');

type TestCase = {
  nums: number[];
  expected: boolean;
};

const filename = path.join(__dirname, 'test_cases.yml');

describe('Contains Duplicate Solution 1', () => {
  const testCases: TestCase[] = loadTestCasesFromYamlFile(filename);

  test.each(testCases)('Test Case %#', ({ nums, expected }) => {
    expect(containsDuplicate(nums)).toEqual(expected);
  });
});

describe('Contains Duplicate Solution 2', () => {
  const testCases: TestCase[] = loadTestCasesFromYamlFile(filename);

  test.each(testCases)('Test Case %#', ({ nums, expected }) => {
    expect(containsDuplicate2(nums)).toEqual(expected);
  });
});
