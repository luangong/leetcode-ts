class RandomizedCollection {
  /**
     * Initializes data structure here.
     */
  constructor() {
    this.keys = [];
    this.map = new Map();
  }

  /**
     * Inserts a key to the collection.
     * @param {number} key
     * @return {boolean} true if the collection didn't already contain the
     *     specified key.
     */
  insert(key) {
    let retval = false;
    if (!this.map.has(key)) {
      this.map.set(key, []);
      retval = true;
    }
    this.map.get(key).push(this.keys.length);
    this.keys.push(key);
    return retval;
  }

  /**
     * Removes the specified key from the collection.
     * @param {number} key
     * @return {boolean} true if the collection contains the specified key.
     */
  remove(key) {
    if (!this.map.has(key)) {
      return false;
    }

    // NOTE: Make sure the indices are in ascending order
    let length = this.map.get(key).length;
    const index = this.map.get(key)[length - 1];
    const lastKey = this.keys[this.keys.length - 1];
    const indices = this.map.get(lastKey);
    let i = indices.length - 2;
    while (i >= 0 && indices[i] > index) {
      indices[i+1] = indices[i];
      i--;
    }
    indices[i+1] = index;
    this.keys[index] = lastKey;

    this.keys.pop();
    this.map.get(key).pop();
    if (this.map.get(key).length == 0) {
      this.map.delete(key);
    }

    return true;
  }

  /**
     * Returns a random key from the collection.
     * @return {number}
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
