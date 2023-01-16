#!/usr/bin/env node

class RandomizedCollection {
  /**
     * Initializes data structure here.
     */
  constructor() {
    this.keys_ = [];
    this.map_ = new Map();
  }

  /**
     * Inserts a key to the collection.
     * @param {number} key
     * @return {boolean} true if the collection didn't already contain the
     *     specified key.
     */
  insert(key) {
    let retval = false;
    if (!this.map_.has(key)) {
      this.map_.set(key, []);
      retval = true;
    }
    this.map_.get(key).push(this.keys_.length);
    this.keys_.push(key);
    return retval;
  }

  /**
     * Removes the specified key from the collection.
     * @param {number} key
     * @return {boolean} true if the collection contains the specified key.
     */
  remove(key) {
    if (!this.map_.has(key)) {
      return false;
    }

    // NOTE: Make sure the indices are in ascending order
    let length = this.map_.get(key).length;
    const index = this.map_.get(key)[length - 1];
    const lastKey = this.keys_[this.keys_.length - 1];
    const indices = this.map_.get(lastKey);
    let i = indices.length - 2;
    while (i >= 0 && indices[i] > index) {
      indices[i+1] = indices[i];
      i--;
    }
    indices[i+1] = index;
    this.keys_[index] = lastKey;

    this.keys_.pop();
    this.map_.get(key).pop();
    if (this.map_.get(key).length == 0) {
      this.map_.delete(key);
    }

    return true;
  }

  /**
     * Returns a random key from the collection.
     * @return {number}
     */
  getRandom() {
    const index = Math.floor(Math.random() * this.keys_.length);
    return this.keys_[index];
  }

  print() {
    for (const [key, indexes] of this.map_) {
      console.log(`${key} => ${indexes}`);
    }
    console.log(this.keys_);
  }
}


const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});


const collection = new RandomizedCollection();

rl.on('line', line => {
  const [operation, key] = line.split(/\s+/);
  if (operation == 'insert') {
    console.log(collection.insert(parseInt(key)));
  } else if (operation == 'remove') {
    console.log(collection.remove(parseInt(key)));
  } else if (operation == 'get') {
    console.log(collection.getRandom());
  } else if (operation == 'print') {
    collection.print();
  }
});
