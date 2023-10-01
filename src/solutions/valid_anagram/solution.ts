export function isAnagram(s: string, t: string): boolean {
  // Count frequency of each character in s
  const map = new Map();
  for (const c of s) {
    if (!map.has(c)) {
      map.set(c, 0);
    }
    map.set(c, map.get(c) + 1);
  }
  for (const c of t) {
    if (!map.has(c)) {
      return false;
    }
    map.set(c, map.get(c) - 1);
    if (map.get(c) === 0) {
      map.delete(c);
    }
  }
  return map.size === 0;
}

export function isAnagram2(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }
  const chars1 = [...s].sort();
  const chars2 = [...t].sort();
  return chars1.every((char, index) => char === chars2[index]);
}
