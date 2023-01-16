const ListNode = require('./linked_list');

describe('ListNode', () => {
  describe('.of()', () => {
    test('ListNode.of()', () => {
      expect(ListNode.of()).toBe(null);
    });

    test('ListNode.of(1)', () => {
      expect([...ListNode.of(1)]).toEqual([1]);
    });

    test('ListNode.of(1, 2)', () => {
      expect([...ListNode.of(1, 2)]).toEqual([1, 2]);
    });

    test('ListNode.of(1, 2, 3)', () => {
      expect([...ListNode.of(1, 2, 3)]).toEqual([1, 2, 3]);
    });
  });

  describe('.from()', () => {
    test('ListNode.from([])', () => {
      expect(ListNode.from([])).toBe(null);
    });

    test('ListNode.from([1])', () => {
      expect([...ListNode.from([1])]).toEqual([1]);
    });

    test('ListNode.from(1, 2)', () => {
      expect([...ListNode.from([1, 2])]).toEqual([1, 2]);
    });

    test('ListNode.from(1, 2, 3)', () => {
      expect([...ListNode.from([1, 2, 3])]).toEqual([1, 2, 3]);
    });
  });
});
