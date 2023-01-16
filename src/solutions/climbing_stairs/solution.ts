function climbStairs(n: number): number {
  let x = 0, y = 1;
  for (let i = 0; i < n; i++) {
    [x, y] = [y, x + y];
  }
  return y;
};

module.exports = {
  climbStairs,
};
