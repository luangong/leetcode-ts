import { loadTestCases } from '../../common/utils';
import { singleNumber } from './solution';

type TestCase = {
  nums: number[];
  expected: number;
};

describe('Single Number II', () => {
  const testCases: TestCase[] = loadTestCases(__dirname);

  test.each(testCases)('Test Case %#', ({ nums, expected }) => {
    expect(singleNumber(nums)).toEqual(expected);
  });
});
