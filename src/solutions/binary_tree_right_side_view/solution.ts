import TreeNode from '../../common/tree';

export function rightSideView(root: TreeNode | null): number[] {
  if (root === null) { return []; }
  const values: number[] = [];
  const queue = [root];
  while (queue.length > 0) {
    values.push(queue[0].val);
    for (let i = 0, length = queue.length; i < length; i++) {
      const node = queue.shift()!;
      if (node.right !== null) {
        queue.push(node.right);
      }
      if (node.left !== null) {
        queue.push(node.left);
      }
    }
  }
  return values;
}
