// This is the Iterator's API interface.
// You should not implement it, or speculate about its implementation

import { MyIterator as Iterator } from '../../common/iterator';

export class PeekingIterator {
  iterator: Iterator;
  value?: number;

  constructor(iterator: Iterator) {
    this.iterator = iterator;
    this.value = undefined;
  }

  peek(): number {
    if (this.value === undefined) {
      this.value = this.iterator.next();
    }
    return this.value;
  }

  next(): number {
    // Use this.value if the next value has been peeked
    if (this.value !== undefined) {
      const value = this.value;
      this.value = undefined;
      return value;
    }
    return this.iterator.next();
  }

  hasNext(): boolean {
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
