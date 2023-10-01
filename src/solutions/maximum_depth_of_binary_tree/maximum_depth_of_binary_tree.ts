import TreeNode from '../../common/tree';

export function maxDepth(root: TreeNode | null): number {
  if (root == null) {
    return 0;
  }
  let depth = 0;
  let queue = [root];
  while (queue.length > 0) {
    for (let i = 0, length = queue.length; i < length; i++) {
      const node = queue.shift()!;
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
