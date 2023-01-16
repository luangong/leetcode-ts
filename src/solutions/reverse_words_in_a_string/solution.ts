function reverseWords(sentence: string): string {
  return sentence.trim().split(/\s+/).reverse().join(' ');
}

module.exports = {
  reverseWords,
};
