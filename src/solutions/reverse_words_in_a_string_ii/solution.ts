/*
Reverse Words in a String II

Given an input string, reverse the string word by word.  A word is defined as a
sequence of non-space characters.

The input string does not contain leading or trailing spaces and the words are
always separated by a single space.

For example,
Given s = "the sky is blue",
return "blue is sky the".

Could you do it in-place without allocating extra space?

Tags: String
*/

function reverseWords(chars: string[]): void {
  const reversed = chars.join('').split(/\s+/).reverse().join(' ').split('');
  // Replace array in place
  chars.splice(0, chars.length, ...reversed);
}

module.exports = {
  reverseWords,
};
