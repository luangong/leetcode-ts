// This is the Iterator's API interface.
// You should not implement it, or speculate about its implementation
// class Iterator {
//   hasNext() {}
//   next() {}
// }

class PeekingIterator {
  constructor(iterator) {
    this.iterator = iterator;
    this.value = undefined;
  }

  peek() {
    if (this.value === undefined) {
      this.value = this.iterator.next();
    }
    return this.value;
  }

  next() {
    // Use this.value if the next value has been peeked
    if (this.value !== undefined) {
      const value = this.value;
      this.value = undefined;
      return value;
    }
    return this.iterator.next();
  }

  hasNext() {
    return this.value !== undefined || this.iterator.hasNext();
  }
}

/**
 * Your PeekingIterator object will be instantiated and called as such:
 * var obj = new PeekingIterator(iterator)
 * var param_1 = obj.peek()
 * var param_2 = obj.next()
 * var param_3 = obj.hasNext()
 */
