import { loadTestCases } from '../../common/utils';
import { RandomizedCollection } from './solution';

type TestCase = {
  operations: string[];
  expected: (boolean | number)[];
};

describe('Insert Delete GetRandom O(1) Duplicates Allowed', () => {
  const testCases: TestCase[] = loadTestCases(__dirname);

  test.each(testCases)('Test Case %#', ({ operations, expected }) => {
    const collection = new RandomizedCollection();
    operations.forEach((operation, i) => {
      if (operation === 'getRandom') {
        expect(collection.keys).toContain(collection.getRandom());
        return;
      }
      const key = Number(operation.split(/\s+/)[1]);
      if (operation.startsWith('insert')) {
        expect(collection.insert(key)).toBe(expected[i]);
      } else if (operation.startsWith('remove')) {
        expect(collection.remove(key)).toBe(expected[i]);
      }
    });
  });
});
