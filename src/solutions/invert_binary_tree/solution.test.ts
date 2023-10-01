import TreeNode from '../../common/tree';
import { loadTestCases } from '../../common/utils';
import { invertTree } from './solution';

type TestCase = {
  root: number[];
  expected: number[];
};

describe('Invert Binary Tree', () => {
  const testCases: TestCase[] = loadTestCases(__dirname);

  test.each(testCases)('Test Case %#', ({ root, expected }) => {
    expect(TreeNode.serialize(invertTree(TreeNode.deserialize(root)))).toEqual(expected);
  });
});
