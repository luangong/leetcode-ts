const { loadTestCases } = require('../../common/utils');
const TreeNode = require('../../common/tree');
const { serialize, deserialize } = require('./solution');

type TestCase = number[];

describe('Serialize and Deserialize BST', () => {
  const testCases: TestCase[] = loadTestCases(__dirname);

  test.each(testCases)('Test Case %#', (...root) => {
    expect(
      TreeNode.serialize(deserialize(serialize(TreeNode.deserialize(root))))
    ).toEqual(root);
  });
});
