import { loadTestCases } from '../../common/utils';
import { kClosest, kClosest2 } from './solution';

type TestCase = {
  points: [number, number][];
  k: number;
  expected: [number, number][];
};

describe('K Closest Points to Origin', () => {
  describe('Solution 1', () => {
    const testCases: TestCase[] = loadTestCases(__dirname);
    test.each(testCases)('Test Case %#', ({ points, k, expected }) => {
      expect(kClosest(points, k)).toIncludeSameMembers(expected);
    });
  });

  describe('Solution 2', () => {
    const testCases: TestCase[] = loadTestCases(__dirname);
    test.each(testCases)('Test Case %#', ({ points, k, expected }) => {
      expect(kClosest2(points, k)).toIncludeSameMembers(expected);
    });
  });
});
