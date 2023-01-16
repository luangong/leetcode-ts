module.exports = class ListNode {
  constructor(public val: number, public next: ListNode | null = null) {}

  static of(...values) {
    return ListNode.from(values);
  }

  static from(iterable) {
    const dummy = new ListNode(-1);
    let tail = dummy;
    for (const value of iterable) {
      tail.next = new ListNode(value);
      tail = tail.next;
    }
    const head = dummy.next;
    dummy.next = null;
    return head;
  }

  *[Symbol.iterator]() {
    for (let node: ListNode | null = this; node !== null; node = node.next) {
      yield node.val;
    }
  }
};
