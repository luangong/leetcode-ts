import { loadTestCases } from '../../common/utils';
import TreeNode from '../../common/tree';
import { rightSideView } from './solution';

type TestCase = {
  root: number[];
  expected: number[];
};

describe('Binary Tree Right Side View', () => {
  const testCases: TestCase[] = loadTestCases(__dirname);

  test.each(testCases)('Test Case %#', ({ root, expected }) => {
    expect(rightSideView(TreeNode.deserialize(root))).toEqual(expected);
  });
});
