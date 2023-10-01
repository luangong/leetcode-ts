// https://leetcode.com/problems/invert-binary-tree

import TreeNode from '../../common/tree';

export function invertTree(root: TreeNode | null): TreeNode | null {
  if (root === null) {
    return null;
  }
  [root.left, root.right] = [invertTree(root.right), invertTree(root.left)];
  return root;
};
