#!/usr/bin/env node

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}


/**
 * @param {TreeNode} root
 * @return {number}
 */
function maxDepth(root) {
  if (root == null) {
    return 0;
  }
  let depth = 0;
  let queue = [root];
  while (queue.length > 0) {
    for (let i = 0, length = queue.length; i < length; i++) {
      const node = queue.shift();
      if (node.left != null) {
        queue.push(node.left);
      }
      if (node.right != null) {
        queue.push(node.right);
      }
    }
    ++depth;
  }
  return depth;
}
