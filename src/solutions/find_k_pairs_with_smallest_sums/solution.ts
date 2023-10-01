// https://github.com/datastructures-js/priority-queue/tree/v4.1.2#readme
import { MinPriorityQueue } from '@datastructures-js/priority-queue';

/**
 * Calculate sums of all pairs and sort them in ascending order and then return the first
 * k (smallest) pairs.
 *
 * Time complexity: O(mn log(mn))
 */
export function kSmallestPairs(nums1: number[], nums2: number[], k: number): number[][] {
  const pairs: [number, number][] = [];
  nums1.forEach(x => {
    nums2.forEach(y => pairs.push([x, y]));
  });
  pairs.sort((x, y) => x[0] + x[1] - (y[0] + y[1]));
  return pairs.slice(0, k);
}

/**
 * Solution 2: Using a priority queue (min heap). Takes O(k log(mn)) time. TLE.
 */
export function kSmallestPairs2(nums1: number[], nums2: number[], k: number): number[][] {
  const minHeap = new MinPriorityQueue({
    priority: ([x, y]: [number, number]) => x + y,
  });
  nums1.forEach(x => {
    nums2.forEach(y => {
      minHeap.enqueue([x, y]);
    });
  });
  const pairs: number[][] = [];
  while (k-- > 0 && !minHeap.isEmpty()) {
    const [x, y] = minHeap.dequeue().element;
    pairs.push([x, y]);
  }
  return pairs;
}

/**
 * Solution 3: Using a priority queue (min heap). Takes O(k log k) time.
 */
export function kSmallestPairs3(nums1: number[], nums2: number[], k: number): number[][] {
  const minHeap = new MinPriorityQueue({
    priority: ([i, j]: [number, number]) => nums1[i] + nums2[j],
  });
  minHeap.enqueue([0, 0]);
  const visited = new Set<string>(['0,0']);
  const pairs: [number, number][] = [];
  while (k-- > 0 && !minHeap.isEmpty()) {
    const [i, j] = minHeap.dequeue().element;
    pairs.push([nums1[i], nums2[j]]);
    if (i + 1 < nums1.length && !visited.has(`${i+1},${j}`)) {
      minHeap.enqueue([i + 1, j]);
      visited.add(`${i+1},${j}`);
    }
    if (j + 1 < nums2.length && !visited.has(`${i},${j+1}`)) {
      minHeap.enqueue([i, j + 1]);
      visited.add(`${i},${j+1}`);
    }
  }
  return pairs;
}
