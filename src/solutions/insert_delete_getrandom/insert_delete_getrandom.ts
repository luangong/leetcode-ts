#!/usr/bin/env node

class RandomizedSet {
  /**
     * Initializes data structure here.
     */
  constructor() {
    this.keys_ = [];
    this.map_ = new Map();
  }

  /**
     * Inserts the specified key into the set.
     * @param {number} key
     * @return {boolean} True if the set didn't contain the specified key.
     */
  insert(key) {
    if (this.map_.has(key)) {
      return false;
    }
    this.map_.set(key, this.keys_.length);
    this.keys_.push(key);
    return true;
  }

  /**
     * Removes the specified key from the set.
     * @param {number} key
     * @return {boolean} True if the contains the specified key.
     */
  remove(key) {
    if (!this.map_.has(key)) {
      return false;
    }

    const index = this.map_.get(key);
    const lastKey = this.keys_[this.keys_.length - 1];
    this.map_.set(lastKey, index);
    this.keys_[index] = lastKey;

    this.keys_.pop();
    this.map_.delete(key);

    return true;
  }

  /**
     * Returns a random key from the set.
     * @return {number}
     */
  getRandom() {
    const index = Math.floor(Math.random() * this.keys_.length);
    return this.keys_[index];
  }
}


////////////////////////////////////////////////////////////////////////////////


const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

const randomizedSet = new RandomizedSet();

rl.on('line', line => {
  const [operation, key] = line.trim().split(/\s+/);
  if (operation == 'insert') {
    console.log(randomizedSet.insert(parseInt(key)));
  } else if (operation == 'remove') {
    console.log(randomizedSet.remove(parseInt(key)));
  } else if (operation == 'get') {
    console.log(randomizedSet.getRandom());
  } else if (operation == 'print') {
  }
});
