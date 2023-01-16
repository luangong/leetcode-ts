const path = require('path');
const { loadTestCasesFromYamlFile } = require('../../common/utils');
const { threeSumMulti } = require('./solution');

type TestCase = {
  nums: number[];
  target: number;
  expected: number;
};

const filename = path.join(__dirname, 'test_cases.yml');

describe('3Sum with Multiplicity', () => {
  const testCases: TestCase[] = loadTestCasesFromYamlFile(filename);

  test.each(testCases)('Test Case %#', ({ nums, target, expected }) => {
    expect(threeSumMulti(nums, target)).toEqual(expected);
  });
});
