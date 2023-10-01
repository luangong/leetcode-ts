export function threeSumMulti(nums: number[], target: number) {
  const map = new Map();
  nums.forEach(num => {
    if (!map.has(num)) {
      map.set(num, 0);
    }
    map.set(num, map.get(num) + 1);
  });

  // By default, arrays are sorted according to each character’s Unicode code point value,
  // according to the string conversion of each element.  So we need to provide our own
  // compare function in order to sort numbers.
  nums = [...map.keys()].sort((a, b) => a - b);

  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    let j = map.get(nums[i]) >= 2 ? i : i + 1;
    let k = nums.length - 1;
    while (j <= k) {
      const sum = nums[i] + nums[j] + nums[k];
      if (sum < target) {
        j++;
      } else if (sum > target) {
        k--;
      } else {
        if (i === j && j === k) {
          const c = map.get(nums[i]);
          if (c >= 3) {
            count += c * (c - 1) * (c - 2) / 6;
          }
        } else if (i === j) {
          count += map.get(nums[i]) * (map.get(nums[i]) - 1) * map.get(nums[k]) / 2;
        } else if (j === k) {
          count += map.get(nums[i]) * map.get(nums[j]) * (map.get(nums[j]) - 1) / 2;
        } else {
          count += map.get(nums[i]) * map.get(nums[j]) * map.get(nums[k]);
        }
        j++;
        k--;
      }
    }
  }
  return count % (10 ** 9 + 7);
}
