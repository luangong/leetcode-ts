// https://leetcode.com/problems/add-two-numbers/

import ListNode from '../../common/linked_list';

export function addTwoNumbers(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  const dummy = new ListNode(-1);
  let tail = dummy;
  let carry = 0;
  while (list1 !== null || list2 !== null) {
    const value1 = list1 !== null ? list1.val : 0;
    const value2 = list2 !== null ? list2.val : 0;
    const digit = (value1 + value2 + carry) % 10;
    carry = Math.floor((value1 + value2 + carry) / 10);
    tail.next = new ListNode(digit);
    tail = tail.next;
    if (list1 !== null) {
      list1 = list1.next;
    }
    if (list2 !== null) {
      list2 = list2.next;
    }
  }
  if (carry === 1) {
    tail.next = new ListNode(1);
    tail = tail.next;
  }
  return dummy.next;
}
