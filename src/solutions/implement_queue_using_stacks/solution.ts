/*
 * The implementation is a classic two-stack queue.  There's a "front" stack and a "back"
 * stack.  Items are pushed onto "back" and popped from "front".  When "front" is empty,
 * we replace "front" with reverse(back).
 *
 * https://github.com/google/closure-library/blob/master/closure/goog/structs/queue.js
 */
class MyQueue {
  constructor(iterable = []) {
    // Front stack. Items are pop()'ed from here.
    this.front = [];

    // Back stack. Items are push()'ed here.
    this.back = [...iterable];
  }

  /**
   * Pushes an item to the back of the queue
   */
  push(item) {
    this.back.push(item);
  }

  /**
   * Removes the item from at the front of the queue and returns that item
   */
  pop() {
    this.maybeFlip_();
    return this.front.pop();
  }

  /**
   * Returns the item at the front of the queue
   */
  peek() {
    this.maybeFlip_();
    return this.front[this.front.length - 1];
  }

  size() {
    return this.front.length + this.back.length;
  }

  empty() {
    return this.front.length === 0 && this.back.length === 0;
  }

  /**
   * Flips the back stack onto the front stack if front is empty, to prepare for peek() or pop()
   */
  maybeFlip_() {
    if (this.front.length == 0) {
      this.front = this.back;
      this.front.reverse();
      this.back = [];
    }
  }
}

module.exports = {
  MyQueue,
};
