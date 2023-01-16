class MyStack {
  /**
   * Initializes data structure here.
   */
  constructor() {
    this.queue1 = [];
    this.queue2 = [];
  }

  /**
   * Pushes an item onto the stack.
   * @param {number} item
   * @return {void}
   */
  push(item) {
    while (this.queue1.length > 0) {
      this.queue2.push(this.queue1.shift());
    }
    this.queue1.push(item);
    while (this.queue2.length > 0) {
      this.queue1.push(this.queue2.shift());
    }
  }

  /**
   * Removes the item at the top of the stack and returns that item.
   * @return {number}
   */
  pop() {
    return this.queue1.shift();
  }

  /**
   * Returns the item at the top of the stack.
   * @return {number}
   */
  top() {
    return this.queue1[0];
  }

  /**
   * Returns whether the stack is empty.
   * @return {boolean}
   */
  empty() {
    return this.queue1.length == 0;
  }
}
