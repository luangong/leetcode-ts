import { loadTestCases  } from '../../common/utils';
import { containsDuplicate } from './solution';

type TestCase = {
  nums: number[];
  expected: boolean;
};

describe('Contains Duplicate', () => {
  const testCases: TestCase[] = loadTestCases(__dirname);

  test.each(testCases)('Test Case %#', ({ nums, expected }) => {
    expect(containsDuplicate(nums)).toBe(expected);
  });
});
