const path = require('path');
const TreeNode = require('../../common/tree');
const { loadTestCasesFromYamlFile } = require('../../common/utils');
const { serialize, deserialize } = require('./solution');

type TestCase = number[];

const filename = path.join(__dirname, 'test_cases.yml');

describe('Serialize and Deserialize BST', () => {
  const testCases: TestCase[] = loadTestCasesFromYamlFile(filename);

  test.each(testCases)('Test Case %#', (...root) => {
    expect(
      TreeNode.serialize(deserialize(serialize(TreeNode.deserialize(root))))
    ).toEqual(root);
  });
});
