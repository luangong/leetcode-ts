export class MyIterator {
  iterable: Iterable<number>;
  iterator: Iterator<number>;
  result?: IteratorResult<number>;

  constructor(iterable: Iterable<number>) {
    this.iterable = iterable;
    this.iterator = this.iterable[Symbol.iterator]();
    this.result = undefined;
  }

  hasNext(): boolean {
    if (this.result === undefined) {
      this.result = this.iterator.next();
    }
    return this.result.done === false;
  }

  next(): number {
    if (this.result !== undefined) {
      const { value } = this.result;
      this.result = undefined;
      return value;
    }
    return this.iterator.next().value;
  }
}
