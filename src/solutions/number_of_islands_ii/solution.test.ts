import { loadTestCases } from '../../common/utils';
import { numIslands2 } from './solution';

type TestCase = {
  m: number;
  n: number;
  positions: [number, number][];
  expected: number[];
};

describe.skip('Number of Islands II', () => {
  const testCases: TestCase[] = loadTestCases(__dirname);

  test.each(testCases)('Test Case %#', ({ m, n, positions, expected }) => {
    expect(numIslands2(m, n, positions)).toEqual(expected);
  });
});
