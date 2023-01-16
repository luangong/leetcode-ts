const { loadTestCases } = require('../../common/utils');
const { singleNumber } = require('./solution');

type TestCase = {
  nums: number[];
  expected: number;
};

describe('Single Number', () => {
  const testCases: TestCase[] = loadTestCases(__dirname);

  test.each(testCases)('Test Case %#', ({ nums, expected }) => {
    expect(singleNumber(nums)).toEqual(expected);
  });
});
