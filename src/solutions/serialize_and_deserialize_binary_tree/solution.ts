import TreeNode from '../../common/tree';

/**
 * Encodes a tree to a single string.
 */
export function serialize(root: TreeNode | null): string {
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
    node = stack.pop()!.right;
  }
  return values.join(' ');
}

/**
 * Decodes your encoded data to tree.
 */
export function deserialize(data: string): TreeNode | null {
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
    node = stack.pop()!;
    i++;
    if (i < values.length && values[i] !== '#') {
      node.right = new TreeNode(Number(values[i++]));
      stack.push(node.right);
      node = node.right;
    }
  }
  return root;
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
