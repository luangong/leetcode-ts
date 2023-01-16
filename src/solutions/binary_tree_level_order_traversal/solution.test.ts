const { loadTestCases } = require('../../common/utils');
const TreeNode = require('../../common/tree');
const { levelOrder } = require('./solution');

type TestCase = {
  root: number[];
  expected: number[][];
};

describe('Binary Tree Level Order Traversal', () => {
  const testCases: TestCase[] = loadTestCases(__dirname);

  test.each(testCases)('Test Case %#', ({ root, expected }) => {
    const rootNode = TreeNode.deserialize(root);
    expect(levelOrder(rootNode)).toEqual(expected);
  });
});
