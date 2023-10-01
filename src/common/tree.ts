export default class TreeNode {
  constructor(
    public val: number,
    public left: TreeNode | null = null,
    public right: TreeNode | null = null
  ) {}

  /**
   * Serialize binary tree to an array rather than a string
   */
  static serialize(root: TreeNode | null): (number | null)[] {
    const values: (number | null)[] = [];
    const queue = [root];
    while (queue.length > 0) {
      // Exit the loop if every node on the queue is null
      if (queue.every(node => node === null)) {
        break;
      }
      const node = queue.shift();
      if (node === null) {
        values.push(null);
        continue;
      }
      values.push(node!.val);
      queue.push(node!.left);
      queue.push(node!.right);
    }
    return values;
  }

  /**
   * Deserialize from an array to a binary tree
   */
  static deserialize(values: (number | null)[]): TreeNode | null {
    if (values.length === 0) {
      return null;
    }
    const root = new TreeNode(values[0]!);
    const queue = [root];
    for (let i = 1; i < values.length; i += 2) {
      const node = <TreeNode>queue.shift();
      if (values[i] !== null) {
        node.left = new TreeNode(values[i]!);
        queue.push(node.left);
      }
      if (i + 1 < values.length && values[i+1] !== null) {
        node.right = new TreeNode(values[i+1]!);
        queue.push(node.right);
      }
    }
    return root;
  }
}
