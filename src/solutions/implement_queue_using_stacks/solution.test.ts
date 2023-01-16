const { MyQueue } = require('./solution');

describe('Implement Queue using Stacks', () => {
  describe('constructor', () => {
    it('MyQueue() should construct a queue with no items', () => {
      const queue = new MyQueue();
      expect(queue.front).toEqual([]);
      expect(queue.back).toEqual([]);
    });

    it('MyQueue([1, 2, 3]) should construct a queue with items 1, 2 and 3', () => {
      const queue = new MyQueue([1, 2, 3]);
      expect(queue.front).toEqual([]);
      expect(queue.back).toEqual([1, 2, 3]);
    });
  });

  describe('push()', () => {
    it('push(1)', () => {
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
