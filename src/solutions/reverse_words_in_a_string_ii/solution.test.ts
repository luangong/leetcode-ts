const path = require('path');
const { loadTestCasesFromYamlFile } = require('../../common/utils');
const { reverseWords } = require('./solution');

type TestCase = {
  chars: string[];
  expected: string[];
};

const filename = path.join(__dirname, 'test_cases.yml');

describe('Reverse Words in a String II', () => {
  const testCases: TestCase[] = loadTestCasesFromYamlFile(filename);

  test.each(testCases)('Test Case %#', ({ chars, expected }) => {
    reverseWords(chars);
    expect(chars).toEqual(expected);
  });
});
