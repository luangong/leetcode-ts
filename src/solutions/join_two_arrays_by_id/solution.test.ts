import { loadTestCases } from '../../common/utils';
import { join } from './solution';

type TestCase = {
  arr1: { id: number }[];
  arr2: { id: number }[];
  expected: { id: number }[];
};

describe('Join Two Arrays by ID', () => {
  const testCases: TestCase[] = loadTestCases(__dirname);

  test.each(testCases)('Test Case %#', ({ arr1, arr2, expected }) => {
    expect(join(arr1, arr2)).toEqual(expected);
  });
});
