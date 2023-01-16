'use strict';

// eslint-disable-next-line no-unused-vars
const LRUCache = module.exports = class {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
  }

  get(key) {
    if (!this.cache.has(key)) {
      return -1;
    }
    const value = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, value);
    return value;
  }

  put(key, value) {
    if (this.cache.has(key)) {
      this.cache.delete(key);
    } else if (this.cache.size == this.capacity) {
      // Remove the least recently used item from the cache
      this.cache.delete(this.cache.keys().next().value);
    }
    this.cache.set(key, value);
  }
};
