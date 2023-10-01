import { promiseAll, promiseAll2 } from './solution';

type TestCase = {
  functions: (() => Promise<number>)[];
  expected: number[] | string;
};

describe('Execute Asynchronous Functions in Parallel', () => {
  const testCases: TestCase[] = [
    {
      functions: [
        () => new Promise(resolve => setTimeout(() => resolve(5), 200)),
      ],
      expected: [5],
    },
    {
      functions: [
        () => new Promise(resolve => setTimeout(() => resolve(1), 200)),
        () => new Promise((resolve, reject) => setTimeout(() => reject('Error'), 100)),
      ],
      expected: 'Error',
    },
    {
      functions: [
        () => new Promise(resolve => setTimeout(() => resolve(4), 50)),
        () => new Promise(resolve => setTimeout(() => resolve(10), 150)),
        () => new Promise(resolve => setTimeout(() => resolve(16), 100)),
      ],
      expected: [4, 10, 16],
    },
  ];

  describe('Solution 1', () => {
    test.each(testCases)('Test Case %#', ({ functions, expected }) => {
      if (typeof expected === 'string') {
        return expect(promiseAll(functions)).rejects.toBe(expected);
      } else {
        return expect(promiseAll(functions)).resolves.toEqual(expected);
      }
    });
  });

  describe('Solution 2', () => {
    test.each(testCases)('Test Case %#', ({ functions, expected }) => {
      if (typeof expected === 'string') {
        return expect(promiseAll2(functions)).rejects.toBe(expected);
      } else {
        return expect(promiseAll2(functions)).resolves.toEqual(expected);
      }
    });
  });
});
