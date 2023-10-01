// https://leetcode.com/problems/binary-tree-level-order-traversal/

import TreeNode from '../../common/tree';

export function levelOrder(root: TreeNode | null): number[][] {
  if (root === null) {
    return [];
  }
  const result: number[][] = [];
  const queue = [root];
  while (queue.length !== 0) {
    const level: number[] = [];
    for (let i = 0, length = queue.length; i < length; i++) {
      const node = queue.shift()!;
      level.push(node.val);
      if (node.left !== null) {
        queue.push(node.left);
      }
      if (node.right !== null) {
        queue.push(node.right);
      }
    }
    result.push(level);
  }
  return result;
}
