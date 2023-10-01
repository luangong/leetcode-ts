import Node from '../../common/tree_next';

export function connect(root: Node | null): Node | null {
  if (root === null) {
    return null;
  }
  const queue = [root];
  while (queue.length > 0) {
    const length = queue.length;
    for (let i = 0; i < length; i++) {
      const node = queue.shift()!;
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
  return root;
}
