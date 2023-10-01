// https://leetcode.com/problems/insert-delete-getrandom-o1-duplicates-allowed/

export class RandomizedCollection {
  /** List of all the keys in the collection */
  keys: number[];

  /** Map from key to the set of indices of the key in the collection */
  map: Map<number, Set<number>>;

  /**
   * Initializes data structure here.
   */
  constructor() {
    this.keys = [];
    this.map = new Map();
  }

  /**
   * Inserts a key to the collection.
   *
   * @return {boolean} true if the collection didn’t already contain the specified key.
   */
  insert(key: number): boolean {
    let retval = false;
    if (!this.map.has(key)) {
      this.map.set(key, new Set());
      retval = true;
    }
    this.map.get(key)!.add(this.keys.length);
    this.keys.push(key);
    return retval;
  }

  /**
   * Removes the specified key from the collection.
   *
   * @return {boolean} true if the collection contains the specified key.
   */
  remove(key: number): boolean {
    if (!this.map.has(key)) {
      return false;
    }

    const index = this.map.get(key)!.keys().next().value;
    const lastKey = this.keys[this.keys.length - 1];
    this.keys[index] = lastKey;
    this.map.get(lastKey)!.delete(this.keys.length - 1);

    // Put (swap) the last key into the position where the key is to be deleted only when
    // the index is not at the end of the array
    if (index !== this.keys.length - 1) {
      this.map.get(lastKey)!.add(index);
    }

    // Remove the key only when it’s not equal to the last key (already removed)
    if (key !== lastKey) {
      this.map.get(key)!.delete(index);
    }

    // Remove empty sets
    if (this.map.get(key)!.size === 0) {
      this.map.delete(key);
    }
    if (this.map.has(lastKey) && this.map.get(lastKey)!.size === 0) {
      this.map.delete(lastKey);
    }

    // Remove key from collection
    this.keys.pop();

    return true;
  }

  /**
   * Returns a random key from the collection.
   */
  getRandom() {
    const index = Math.floor(Math.random() * this.keys.length);
    return this.keys[index];
  }

  print() {
    for (const [key, indexes] of this.map) {
      console.log(`${key} => ${indexes}`);
    }
    console.log(this.keys);
  }
}
