const path = require('path');
const TreeNode = require('../../common/tree');
const { loadTestCasesFromYamlFile } = require('../../common/utils');
const { levelOrder } = require('./solution');

type TestCase = {
  root: number[];
  expected: number[][];
};

const filename = path.join(__dirname, 'test_cases.yml');

describe('Binary Tree Level Order Traversal', () => {
  const testCases: TestCase[] = loadTestCasesFromYamlFile(filename);

  test.each(testCases)('Test Case %#', ({ root, expected }) => {
    const rootNode = TreeNode.deserialize(root);
    expect(levelOrder(rootNode)).toEqual(expected);
  });
});
