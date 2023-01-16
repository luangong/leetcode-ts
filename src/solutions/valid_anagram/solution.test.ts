const { loadTestCases } = require('../../common/utils');
const { isAnagram, isAnagram2 } = require('./solution');

type TestCase = {
  s: string;
  t: string;
  expected: boolean;
};

describe('Valid Anagram', () => {
  describe('Solution 1', () => {
    const testCases: TestCase[] = loadTestCases(__dirname);
    test.each(testCases)('Test Case %#', ({ s, t, expected }) => {
      expect(isAnagram(s, t)).toBe(expected);
    });
  });
});
