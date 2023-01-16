#!/usr/bin/env node

/**
 * Determines whether a string is an anagram of the other.
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isAnagram(s, t) {
  const map = new Map();
  for (const c of s) {
    if (!map.has(c)) {
      map.set(c, 0);
    }
    map.set(c, map.get(c) + 1);
  }
}


const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

rl.on('line', line => {
  const [s, t] = line.trim().split(/\s+/);
  console.log(isAnagram(s, t));
});
