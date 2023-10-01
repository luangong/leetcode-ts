export class MyStack {
  queue1: number[];
  queue2: number[];

  /**
   * Initializes data structure here.
   */
  constructor() {
    this.queue1 = [];
    this.queue2 = [];
  }

  /**
   * Pushes an item onto the stack.
   */
  push(item: number) {
    while (this.queue1.length > 0) {
      this.queue2.push(this.queue1.shift()!);
    }
    this.queue1.push(item);
    while (this.queue2.length > 0) {
      this.queue1.push(this.queue2.shift()!);
    }
  }

  /**
   * Removes the item at the top of the stack and returns that item.
   */
  pop(): number | undefined {
    return this.queue1.shift();
  }

  /**
   * Returns the item at the top of the stack.
   */
  top(): number | undefined {
    return this.queue1[0];
  }

  /**
   * Checks whether the stack is empty.
   */
  empty(): boolean {
    return this.queue1.length == 0;
  }
}
