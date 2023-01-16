/**
 * 856. Score of Parentheses
 *
 * Given a balanced parentheses string S, compute the score of the string based on the
 * following rules:
 *
 *   - () has score 1
 *   - AB has score A + B, where A and B are balanced parentheses strings.
 *   - (A) has score 2 * A, where A is a balanced parentheses string.
 *
 * Example 1:
 *
 *   Input: "()"
 *   Output: 1
 *
 * Example 2:
 *
 *   Input: "(())"
 *   Output: 2
 *
 * Example 3:
 *
 *   Input: "()()"
 *   Output: 2
 *
 * Example 4:
 *
 *   Input: "(()(()))"
 *   Output: 6
 *
 * Note:
 *
 *   - S is a balanced parentheses string, containing only ( and ).
 *   - 2 <= S.length <= 50
 */

function scoreOfParentheses(parentheses: string): number {
  const stack = [0];
  for (const parenthesis of parentheses) {
    if (parenthesis === '(') {
      stack.push(0);
    } else {
      const score = stack.pop();
      stack[stack.length - 1] += score === 0 ? 1 : score * 2;
    }
  }
  return stack.pop()!;
}

module.exports = {
  scoreOfParentheses,
};
