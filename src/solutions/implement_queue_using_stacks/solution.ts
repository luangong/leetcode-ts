// https://leetcode.com/problems/implement-queue-using-stacks/

/*
 * The implementation is a classic two-stack queue.  There's a "front" stack and a "back"
 * stack.  Items are pushed onto "back" and popped from "front".  When "front" is empty,
 * we replace "front" with reverse(back).
 *
 * https://github.com/google/closure-library/blob/master/closure/goog/structs/queue.js
 */
export class MyQueue {
  /* private */ front: number[];
  /* private */ back: number[];

  constructor(iterable: Iterable<number> = []) {
    // Front stack. Items are pop()'ed from here.
    this.front = [];

    // Back stack. Items are push()'ed here.
    this.back = [...iterable];
  }

  /**
   * Pushes an item to the back of the queue.
   */
  push(item: number): void {
    this.back.push(item);
  }

  /**
   * Removes the item from at the front of the queue and returns that item.
   */
  pop(): number | undefined {
    this._maybeFlip();
    return this.front.pop();
  }

  /**
   * Returns the item at the front of the queue.
   */
  peek(): number {
    this._maybeFlip();
    return this.front[this.front.length - 1];
  }

  // size(): number {
  //   return this.front.length + this.back.length;
  // }

  empty(): boolean {
    return this.front.length === 0 && this.back.length === 0;
  }

  /**
   * Flips the back stack onto the front stack if front is empty, to prepare for peek() or
   * pop().
   */
  private _maybeFlip(): void {
    if (this.front.length !== 0) {
      return;
    }
    this.front = this.back;
    this.front.reverse();
    this.back = [];
  }
}
