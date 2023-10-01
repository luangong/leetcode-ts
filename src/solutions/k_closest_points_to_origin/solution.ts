// https://leetcode.com/problems/k-closest-points-to-origin/

// https://github.com/datastructures-js/priority-queue/tree/v4.1.2#readme
import { MinPriorityQueue } from '@datastructures-js/priority-queue';

/**
 * O(n log n + k)
 */
export function kClosest(points: number[][], k: number): number[][] {
  points.sort(
    (p1, p2) => p1[0] * p1[0] + p1[1] * p1[1] - (p2[0] * p2[0] + p2[1] * p2[1])
  );
  return points.slice(0, k);
}

/**
 * O(n + k log n)
 */
export function kClosest2(points: number[][], k: number): number[][] {
  const minHeap = new MinPriorityQueue({
    priority: ([x, y]: [number, number]) => x * x + y * y,
  });
  points.forEach(([x, y]) => {
    minHeap.enqueue([x, y]);
  });
  const closest: [number, number][] = [];
  while (k-- > 0 && !minHeap.isEmpty()) {
    closest.push(minHeap.dequeue().element);
  }
  return closest;
};
