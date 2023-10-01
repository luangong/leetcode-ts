/**
 * Serialize and Deserialize BST
 *
 * Serialization is converting a data structure or object into a sequence of bits so that
 * it can be stored in a file or memory buffer, or transmitted across a network connection
 * link to be reconstructed later in the same or another computer environment.
 *
 * Design an algorithm to serialize and deserialize a binary search tree.  There is no
 * restriction on how your serialization/deserialization algorithm should work.  You need
 * to ensure that a binary search tree can be serialized to a string, and this string can
 * be deserialized to the original tree structure.
 *
 * The encoded string should be as compact as possible.
 */

/*
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

import TreeNode from '../../common/tree';

export function serialize(root: TreeNode | null): string {
  const values = [];
  const stack = [];
  let node = root;
  while (stack.length > 0 || node !== null) {
    while (node !== null) {
      values.push(node.val);
      stack.push(node);
      node = node.left;
    }
    node = stack.pop()!.right;
  }
  // for (let node = root; stack.length > 0 || node !== null; node = stack.pop().right) {
  //   while (node !== null) {
  //     values.push(node.val);
  //     stack.push(node);
  //     node = node.left;
  //   }
  // }
  // array.join() automatically converts an item to a string if it's not
  return values.join(' ');
}

/*
const deserialize = module.exports.deserialize = function(data) {
  // NOTE: ''.split(...) returns [''] instead of [], so we need to filter out empty
  // strings before converting them to numbers.
  const values = data.split(/\s+/).filter(Boolean).map(Number);
  if (values.length === 0) {
    return null;
  }
  const root = new TreeNode(values.pop());
  const left = values.filter(value => value < root.val).join(' ');
  const right = values.filter(value => value > root.val).join(' ');
  root.left = deserialize(left);
  root.right = deserialize(right);
  return root;
};
*/

// Helper
function _deserialize(values: number[], start: number, end: number): TreeNode | null {
  if (start >= end) { return null; }
  const root = new TreeNode(values[start]);
  let i = start + 1;
  while (i < end && values[i] < values[start]) {
    i++;
  }
  root.left = _deserialize(values, start + 1, i);
  root.right = _deserialize(values, i, end);
  return root;
}

export function deserialize(data: string): TreeNode | null {
  // Filter out empty string fields
  const values = data.split(/\s+/).filter(Boolean).map(Number);
  return _deserialize(values, 0, values.length);
}
