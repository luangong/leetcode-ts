'use strict';

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
const serialize = function(root) {
  const values = [];
  const stack = [];
  let node = root;
  while (node !== null || stack.length > 0) {
    while (node !== null) {
      stack.push(node);
      values.push(node.val);
      node = node.left;
    }
    values.push('#');
    node = stack.pop().right;
  }
  return values.join(' ');
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
const deserialize = function(data) {
  const values = data.split(/\s+/).filter(Boolean);
  if (values.length === 0 || values[0] === '#') {
    return null;
  }
  const root = new TreeNode(Number(values[0]));
  let node = root;
  const stack = [root];
  for (let i = 1; i < values.length; ) {
    while (values[i] !== '#') {
      node.left = new TreeNode(Number(values[i++]));
      stack.push(node.left);
      node = node.left;
    }
    node = stack.pop();
    i++;
    if (i < values.length && values[i] !== '#') {
      node.right = new TreeNode(Number(values[i++]));
      stack.push(node.right);
      node = node.right;
    }
  }
  return root;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
