const path = require('path');
const { loadTestCasesFromYamlFile } = require('../../common/utils');
const { scoreOfParentheses } = require('./solution');

type TestCase = {
  parentheses: string;
  expected: number;
};

const filename = path.join(__dirname, 'test_cases.yml');

describe('Score of Parentheses', () => {
  const testCases: TestCase[] = loadTestCasesFromYamlFile(filename);

  test.each(testCases)('Test Case %#', ({ parentheses, expected }) => {
    expect(scoreOfParentheses(parentheses)).toEqual(expected);
  });
});
