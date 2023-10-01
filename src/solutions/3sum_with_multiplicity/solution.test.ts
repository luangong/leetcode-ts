import { loadTestCases } from '../../common/utils';
import { threeSumMulti } from './solution';

type TestCase = {
  nums: number[];
  target: number;
  expected: number;
};

describe('3Sum with Multiplicity', () => {
  const testCases: TestCase[] = loadTestCases(__dirname);

  test.each(testCases)('Test Case %#', ({ nums, target, expected }) => {
    expect(threeSumMulti(nums, target)).toEqual(expected);
  });
});
