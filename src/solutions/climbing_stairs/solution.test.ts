import { loadTestCases } from '../../common/utils';
import { climbStairs } from './solution';

type TestCase = {
  n: number;
  expected: number;
};

describe('Climbing Stairs', () => {
  const testCases: TestCase[] = loadTestCases(__dirname);

  test.each(testCases)('Test Case %#', ({ n, expected }) => {
    expect(climbStairs(n)).toBe(expected);
  });
});
