const { loadTestCases } = require('../../common/utils');
const { numIslands2 } = require('./solution');

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
