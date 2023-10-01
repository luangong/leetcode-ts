import { loadTestCases } from '../../common/utils';
import { RandomizedSet } from './solution';

type TestCase = {
  operations: string[];
  expected: (boolean | number)[];
};

describe('Insert Delete GetRandom O(1)', () => {
  const testCases: TestCase[] = loadTestCases(__dirname);

  test.each(testCases)('Test Case %#', ({ operations, expected }) => {
    const set = new RandomizedSet();
    operations.forEach((operation, i) => {
      if (operation === 'getRandom') {
        // There is no easy way to check if the `getRandom()` operation has a time
        // complexity of O(1).  We can only check if the retrieved random key is in the
        // set.
        expect(set.keys).toContain(set.getRandom());
        return;
      }
      const key = Number(operation.split(/\s+/)[1]);
      if (operation.startsWith('insert')) {
        expect(set.insert(key)).toBe(expected[i]);
      } else if (operation.startsWith('remove')) {
        expect(set.remove(key)).toBe(expected[i]);
      }
    });
  });
});
