function lengthOfLongestSubstring(s) {
  let maxLength = 0;
  let start = 0;
  const lastSeen = new Map();
  [...s].forEach((char, i) => {
    const index = lastSeen.has(char) ? lastSeen.get(char) : -1;
    if (index >= start) {
      maxLength = Math.max(maxLength, i - start);
      start = index + 1;
    }
    lastSeen.set(char, i);
  });
  return Math.max(maxLength, s.length - start);
}
