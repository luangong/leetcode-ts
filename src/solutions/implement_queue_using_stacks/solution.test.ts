import { loadTestCases } from '../../common/utils';
import { MyQueue } from './solution';

type TestCase = {
  operations: string[];
  expected: (number | null)[];
};

describe('Implement Queue using Stacks', () => {
  const testCases: TestCase[] = loadTestCases(__dirname);

  test.each(testCases)('Test Case %#', ({ operations, expected }) => {
    const queue = new MyQueue();
    operations.forEach((operation, i) => {
      if (operation.startsWith('push')) {
        queue.push(Number(operation.split(/\s+/)[1]));
      } else if (operation === 'peek') {
        expect(queue.peek()).toBe(expected[i]);
      } else if (operation === 'pop') {
        expect(queue.pop()).toBe(expected[i]);
      } else if (operation === 'empty') {
        expect(queue.empty()).toBe(expected[i]);
      }
    });
  });
});
