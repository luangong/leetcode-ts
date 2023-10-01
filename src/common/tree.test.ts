import TreeNode from './tree';

describe('TreeNode', () => {
  describe('.serialize()', () => {
    // https://jestjs.io/docs/api#testeachtablename-fn-timeout
    test.each([
      [[],              null],
      [[1],             new TreeNode(1)],
      [[1, 2],          new TreeNode(1, new TreeNode(2))],
      [[1, null, 3],    new TreeNode(1, null, new TreeNode(3))],
      [[1, 2, 3],       new TreeNode(1, new TreeNode(2), new TreeNode(3))],
      [[1, 2, null, 4], new TreeNode(1, new TreeNode(2, new TreeNode(4)), null)],
      [[1, 2, 3, null, null, 4, 5], new TreeNode(
        1,
        new TreeNode(2),
        new TreeNode(3, new TreeNode(4), new TreeNode(5)),
      )],
      [[5, 4, 7, 3, null, 2, null, -1, null, 9], new TreeNode(
        5,
        new TreeNode(4, new TreeNode(3, new TreeNode(-1))),
        new TreeNode(7, new TreeNode(2, new TreeNode(9))),
      )],
      [[3, 9, 20, null, null, 15, 7], new TreeNode(
        3,
        new TreeNode(9),
        new TreeNode(20, new TreeNode(15), new TreeNode(7)),
      )],
    ])('Test Case %#: %p', (
      expected: (number | null)[],
      root: TreeNode | null,
    ) => {
      expect(TreeNode.serialize(root)).toEqual(expected);
    });
  });

  describe('.deserialize()', () => {
    test.each([
      [[]],
      [[1]],
      [[1, 2]],
      [[1, null, 3]],
      [[1, 2, 3]],
      [[1, 2, null, 4]],
      [[1, 2, 3, null, null, 4, 5]],
      [[5, 4, 7, 3, null, 2, null, -1, null, 9]],
      [[3, 9, 20, null, null, 15, 7]],
    ])('Test Case %#: %p', (values: (number | null)[]) => {
      expect(TreeNode.serialize(TreeNode.deserialize(values))).toEqual(values);
    });
  });
});
