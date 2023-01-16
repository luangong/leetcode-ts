const { MyQueue } = require('./solution');

describe('Implement Queue using Stacks', () => {
  describe('constructor', () => {
    test('new MyQueue()', () => {
      const queue = new MyQueue();
      expect(queue.front).toEqual([]);
      expect(queue.back).toEqual([]);
    });

    test('new MyQueue([1, 2, 3])', () => {
      const queue = new MyQueue([1, 2, 3]);
      expect(queue.front).toEqual([]);
      expect(queue.back).toEqual([1, 2, 3]);
    });
  });

  describe('.push()', () => {
    test('.push(1)', () => {
      const queue = new MyQueue();
      queue.push(1);
      expect(queue.back).toEqual([1]);
    });
  });

  describe('pop()', () => {
  });

  describe('peek()', () => {
  });

  describe('size()', () => {
  });

  describe('empty()', () => {
  });
});
