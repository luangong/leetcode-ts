import { loadTestCases } from '../../common/utils';
import { scoreOfParentheses } from './solution';

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
