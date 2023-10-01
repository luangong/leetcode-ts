/**
 * Valid Parentheses
 *
 * Given a string containing just the characters '(', ')', '{', '}', '[' and
 * ']', determine if the input string is valid.
 *
 * The brackets must close in the correct order, "()" and "()[]{}" are all valid
 * but "(]" and "([)]" are not.
 *
 * Tags: Stack, String
 */

export function isValid(s: string): boolean {
  const stack: string[] = [];
  for (const char of s) {
    if (char === '(' || char === '{' || char === '[') {
      stack.push(char);
    } else if (stack.length === 0) {
      return false;
    } else if (stack[stack.length-1] === '(' && char === ')' ||
      stack[stack.length - 1] === '{' && char === '}' ||
      stack[stack.length - 1] === '[' && char === ']') {
      stack.pop();
    } else {
      return false;
    }
  }
  return stack.length === 0;
}
