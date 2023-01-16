const { loadTestCases } = require('../../common/utils');
const { reverseWords } = require('./solution');

type TestCase = {
  sentence: string;
  expected: string;
};

describe('Reverse Words in a String', () => {
  const testCases: TestCase[] = loadTestCases(__dirname);

  test.each(testCases)('Test Case %#', ({ sentence, expected }) => {
    expect(reverseWords(sentence)).toEqual(expected);
  });
});
