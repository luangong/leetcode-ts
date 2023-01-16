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

/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = module.exports = function(s) {
  const stack = [];
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
};


////////////////////////////////////////////////////////////////////////////////


const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

rl.on('line', line => {
  console.log(isValid(line));
});
