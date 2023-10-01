export class LRUCache {
  capacity: number;
  cache: Map<number, number>;

  constructor(capacity: number) {
    this.capacity = capacity;
    this.cache = new Map();
  }

  get(key: number): number {
    if (!this.cache.has(key)) {
      return -1;
    }
    const value = this.cache.get(key)!;
    this.cache.delete(key);
    this.cache.set(key, value);
    return value;
  }

  put(key: number, value: number) {
    if (this.cache.has(key)) {
      this.cache.delete(key);
    } else if (this.cache.size == this.capacity) {
      // Remove the least recently used item from the cache
      this.cache.delete(this.cache.keys().next().value);
    }
    this.cache.set(key, value);
  }
};
