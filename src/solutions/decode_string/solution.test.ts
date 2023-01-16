const path = require('path');
const { loadTestCasesFromYamlFile } = require('../../common/utils');
const { decodeString } = require('./solution');

type TestCase = {
  s: string;
  expected: string;
};

const filename = path.join(__dirname, 'test_cases.yml');

describe('Decode String', () => {
  const testCases: TestCase[] = loadTestCasesFromYamlFile(filename);

  test.each(testCases)('Test Case %#', ({ s, expected }) => {
    expect(decodeString(s)).toEqual(expected);
  });
});
