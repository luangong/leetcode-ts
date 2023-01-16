const { PriorityQueue } = require('@datastructures-js/priority-queue');

// function kSmallestPairs(nums1: number[], nums2: number[], k: number): number[][] {
//   const pairs = [[nums1[0], nums2[0]]];
//   let i = 0;
//   let j = 0;
//   while (i < nums1.length && j < nums2.length) {
//     if (nums1[i] + nums2[j+1] < nums1[i+1] + nums2[j]) {
//       pairs.push([nums1[i], nums2[j+1]]);
//       j++;
//     } else {
//       pairs.push([nums1[i+1], nums2[j]]);
//       i++;
//     }
//   }
//   return pairs;
// }

type Item = [number, [number, number]];

function kSmallestPairs2(nums1: number[], nums2: number[], k: number): number[][] {
  let pq = new PriorityQueue<Item>((a, b) => a[0] - b[0]);
  nums1.forEach(x => {
    nums2.forEach(y => {
      pq.enqueue([x + y, [x, y]]);
    });
  });

  let smallestPairs = [];
  while (k-- > 0 && pq.size() > 0) {
    smallestPairs.push(pq.dequeue()[1]);
  }
  return smallestPairs;
}

module.exports = { kSmallestPairs2 };
