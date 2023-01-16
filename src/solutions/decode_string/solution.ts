function decodeString(s: string): string {
  const stack: [number, string][] = [[1, '']];
  const digits = new Set('0123456789');
  const alphabet = new Set('abcdefghijklmnopqrstuvwxyz');
  let count = 0;
  for (const char of s) {
    if (digits.has(char)) {
      count = count * 10 + parseInt(char);
    } else if (alphabet.has(char.toLowerCase())) {
      // Update substring on the stack
      stack[stack.length - 1][1] += char;
    } else if (char === '[') {
      // Add new substring to stack
      stack.push([count, '']);
      count = 0;
    } else if (char === ']') {
      // Pop substring from stack, expand it, and then merge it with the last substring on
      // the stack
      let [n, substr] = stack.pop()!;
      stack[stack.length - 1][1] += substr.repeat(n);
      n = 0;
    }
  }
  return stack.pop()![1];
};

module.exports = {
  decodeString,
};
