// https://leetcode.com/problems/lfu-cache/

/**
 * LFU Cache
 *
 * Design and implement a data structure for Least Frequently Used (LFU) cache.
 * It should support the following operations: get and put.
 *
 *   * get(key)        -- Get the value (will always be positive) of the key if
 *                        the key exists in the cache, otherwise return -1.
 *
 *   * put(key, value) -- Set or insert the value if the key is not already
 *                        present.  When the cache reaches its capacity, it
 *                        should invalidate the least frequently used item
 *                        before inserting a new item.  For the purpose of this
 *                        problem, when there is a tie (i.e., two or more keys
 *                        that have the same frequency), the least recently used
 *                        key would be evicted.
 *
 * Follow up: Could you do both operations in O(1) time complexity?
 *
 * Example:
 *
 *   LFUCache cache = new LFUCache(2);
 *
 *   cache.put(1, 1);
 *   cache.put(2, 2);
 *   cache.get(1);       // returns 1
 *   cache.put(3, 3);    // evicts key 2
 *   cache.get(2);       // returns -1 (not found)
 *   cache.get(3);       // returns 3
 *   cache.put(4, 4);    // evicts key 1
 *   cache.get(1);       // returns -1 (not found)
 *   cache.get(3);       // returns 3
 *   cache.get(4);       // returns 4
 *
 * Company Tags: Amazon, Google
 * Tags: Design
 * Similar Problems: (H) LRU Cache, (H) Design In-Memory File System
 */

/**
 * The doubly-linked list node.
 * @param {number} frequency
 * @param {iterable<number>} keys
 * @param {Node} prev
 * @param {Node} next
 */
class Node {
  frequency: number;
  keys: Set<number>;
  prev: Node | null;
  next: Node | null;

  constructor(frequency: number, keys: Iterable<number>, prev: Node | null, next: Node | null) {
    this.frequency = frequency;
    this.keys = new Set(keys);
    this.prev = prev;
    this.next = next;
  }
}

export class LFUCache {
  capacity: number;
  map: Map<number, number>;
  nodes: Map<number, Node>;
  head: Node | null;

  constructor(capacity: number) {
    this.capacity = capacity;
    this.map = new Map();
    this.nodes = new Map();
    this.head = null;
  }

  get(key: number): number {
    if (!this.map.has(key)) {
      return -1;
    }
    this.increment(key);
    return this.map.get(key)!;
  }

  /**
   * Sets or updates the value associated with the key.
   */
  put(key: number, value: number): void {
    if (!this.map.has(key)) {
      if (this.map.size === this.capacity) {
        this.removeLeastFrequentlyUsed();
      }
      const node = new Node(0, [key], null, this.head);
      if (this.head !== null) {
        this.head.prev = node;
      }
      this.head = node;
      this.nodes.set(key, node);
    }
    this.increment(key);
    this.map.set(key, value);
  }

  /**
   * Increments the frequency associated with the specified key.
   */
  increment(key: number): void {
    const node = this.nodes.get(key)!;
    const frequency = node.frequency;
    node.keys.delete(key);
    if (node.next === null || node.next.frequency !== frequency + 1) {
      // Create a new node with the new frequency and the key.
      const tmp = new Node(frequency + 1, [key], node, node.next);
      node.next = tmp;
      this.nodes.set(key, tmp);
    } else {
      node.next.keys.add(key);
      this.nodes.set(key, node.next);
    }

    // Remove the node from the doubly-linked list if it becomes empty after
    // removing a key from the node.
    if (node.keys.size === 0) {
      this.removeNode(node);
    }
  }

  /**
   * Removes the least frequently used key-value pair from the cache.
   */
  removeLeastFrequentlyUsed() {
    const key = this.head?.keys.keys().next().value;
    this.map.delete(key);
    this.nodes.delete(key);
    this.head?.keys.delete(key);
    if (this.head?.keys.size === 0) {
      this.removeNode(this.head);
    }
  }

  /**
   * Removes the specified node from the doubly-linked list.
   */
  removeNode(node: Node): void {
    if (node.prev === null) {
      this.head = node.next;
    } else {
      node.prev.next = node.next;
    }
    if (node.next !== null) {
      node.next.prev = node.prev;
    }
  }
}
