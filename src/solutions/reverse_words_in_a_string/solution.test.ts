const path = require('path');
const { loadTestCasesFromYamlFile } = require('../../common/utils');
const { reverseWords } = require('./solution');

type TestCase = {
  sentence: string;
  expected: string;
};

const filename = path.join(__dirname, 'test_cases.yml');

describe('Reverse Words in a String', () => {
  const testCases: TestCase[] = loadTestCasesFromYamlFile(filename);

  test.each(testCases)('Test Case %#', ({ sentence, expected }) => {
    expect(reverseWords(sentence)).toEqual(expected);
  });
});
