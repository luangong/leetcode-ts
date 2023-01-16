const path = require('path');
const { loadTestCasesFromYamlFile } = require('../../common/utils');
const { numIslands2 } = require('./solution');

type TestCase = {
  m: number;
  n: number;
  positions: [number, number][];
  expected: number[];
};

const filename = path.join(__dirname, 'test_cases.yml');

describe.skip('Number of Islands II', () => {
  const testCases: TestCase[] = loadTestCasesFromYamlFile(filename);

  test.each(testCases)('Test Case %#', ({ m, n, positions, expected }) => {
    expect(numIslands2(m, n, positions)).toEqual(expected);
  });
});
