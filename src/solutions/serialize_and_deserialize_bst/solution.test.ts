import { loadTestCases } from '../../common/utils';
import TreeNode from '../../common/tree';
import { serialize, deserialize } from './solution';

type TestCase = number[];

describe('Serialize and Deserialize BST', () => {
  const testCases: TestCase[] = loadTestCases(__dirname);

  test.each(testCases)('Test Case %#', (...root) => {
    expect(
      TreeNode.serialize(deserialize(serialize(TreeNode.deserialize(root))))
    ).toEqual(root);
  });
});
