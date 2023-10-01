import { loadTestCases } from '../../common/utils';
import { decodeString } from './solution';

type TestCase = {
  s: string;
  expected: string;
};

describe('Decode String', () => {
  const testCases: TestCase[] = loadTestCases(__dirname);

  test.each(testCases)('Test Case %#', ({ s, expected }) => {
    expect(decodeString(s)).toEqual(expected);
  });
});
