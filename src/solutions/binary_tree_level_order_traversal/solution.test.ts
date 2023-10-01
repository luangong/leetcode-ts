import { loadTestCases } from '../../common/utils';
import TreeNode from '../../common/tree';
import { levelOrder } from './solution';

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
