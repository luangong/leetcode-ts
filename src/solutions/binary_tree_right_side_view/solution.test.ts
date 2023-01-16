const path = require('path');
const TreeNode = require('../../common/tree');
const { loadTestCasesFromYamlFile } = require('../../common/utils');
const { rightSideView } = require('./solution');

type TestCase = {
  root: number[];
  expected: number[];
};

const filename = path.join(__dirname, 'test_cases.yml');

describe('Binary Tree Right Side View', () => {
  const testCases: TestCase[] = loadTestCasesFromYamlFile(filename);

  test.each(testCases)('Test Case %#', ({ root, expected }) => {
    expect(rightSideView(TreeNode.deserialize(root))).toEqual(expected);
  });
});
