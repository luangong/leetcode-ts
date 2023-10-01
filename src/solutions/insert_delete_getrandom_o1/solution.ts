export class RandomizedSet {
  /** List of keys in the set */
  keys: number[];

  /** Map from key to index in keys */
  map: Map<number, number>;

  /**
   * Initializes data structure here.
   */
  constructor() {
    this.keys = [];
    this.map = new Map();
  }

  /**
   * Inserts the specified key into the set.
   *
   * @return {boolean} True if the set didn’t contain the specified key.
   */
  insert(key: number): boolean {
    if (this.map.has(key)) {
      return false;
    }
    this.map.set(key, this.keys.length);
    this.keys.push(key);
    return true;
  }

  /**
   * Removes the specified key from the set.
   *
   * To delete a key in O(1) time, we need to swap the key with the key at the end of the
   * list and then remove the last element in the list.
   *
   * @return {boolean} True if the set contains the specified key.
   */
  remove(key: number): boolean {
    if (!this.map.has(key)) {
      return false;
    }

    const index = this.map.get(key)!;
    const lastKey = this.keys[this.keys.length - 1];
    this.map.set(lastKey, index);
    this.keys[index] = lastKey;

    this.keys.pop();
    this.map.delete(key);

    return true;
  }

  /**
   * Retrieves a random key from the set.
   */
  getRandom(): number {
    const index = Math.floor(Math.random() * this.keys.length);
    return this.keys[index];
  }
}
