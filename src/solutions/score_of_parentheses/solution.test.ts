const { loadTestCases } = require('../../common/utils');
const { scoreOfParentheses } = require('./solution');

type TestCase = {
  parentheses: string;
  expected: number;
};

describe('Score of Parentheses', () => {
  const testCases: TestCase[] = loadTestCases(__dirname);

  test.each(testCases)('Test Case %#', ({ parentheses, expected }) => {
    expect(scoreOfParentheses(parentheses)).toEqual(expected);
  });
});
