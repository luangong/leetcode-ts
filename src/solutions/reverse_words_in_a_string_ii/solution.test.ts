import { loadTestCases } from '../../common/utils';
import { reverseWords } from './solution';

type TestCase = {
  chars: string[];
  expected: string[];
};

describe('Reverse Words in a String II', () => {
  const testCases: TestCase[] = loadTestCases(__dirname);

  test.each(testCases)('Test Case %#', ({ chars, expected }) => {
    reverseWords(chars);
    expect(chars).toEqual(expected);
  });
});
