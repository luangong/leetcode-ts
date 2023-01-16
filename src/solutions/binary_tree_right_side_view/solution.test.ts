const { loadTestCases } = require('../../common/utils');
const TreeNode = require('../../common/tree');
const { rightSideView } = require('./solution');

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
