'use strict';

// Definition for binary tree with next pointer.
//
// function TreeLinkNode(val) {
//   this.val = val;
//   this.left = null;
//   this.right = null;
//   this.next = null;
// }

/**
 * @param {TreeLinkNode} root
 * @return {void} Do not return anything, modify tree in-place instead.
 */
// eslint-disable-next-line no-unused-vars
const connect = module.exports = function(root) {
  if (root === null) { return; }
  const queue = [root];
  while (queue.length > 0) {
    const length = queue.length;
    for (let i = 0; i < length; i++) {
      const node = queue.shift();
      if (i !== length - 1) {
        node.next = queue[0];
      }
      if (node.left !== null) {
        queue.push(node.left);
      }
      if (node.right !== null) {
        queue.push(node.right);
      }
    }
  }
};
