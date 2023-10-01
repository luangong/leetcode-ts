import { loadTestCases } from '../../common/utils';
import { isAnagram, isAnagram2 } from './solution';

type TestCase = {
  s: string;
  t: string;
  expected: boolean;
};

describe('Valid Anagram', () => {
  const testCases: TestCase[] = loadTestCases(__dirname);

  describe('Solution 1', () => {
    test.each(testCases)('Test Case %#', ({ s, t, expected }) => {
      expect(isAnagram(s, t)).toBe(expected);
    });
  });

  describe('Solution 2', () => {
    test.each(testCases)('Test Case %#', ({ s, t, expected }) => {
      expect(isAnagram2(s, t)).toBe(expected);
    });
  });
});
