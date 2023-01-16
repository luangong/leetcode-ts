/*
const numIslands2 = module.exports = function(m, n, positions) {
  const result = [];
  const roots = new Map();
  let numIslands = 0;
  positions.forEach(([i, j]) => {
    roots.set(`${i},${j}`, `${i},${j}`);
    numIslands++;
    for (const [row, column] of [[i-1, j], [i+1, j], [i, j-1], [i, j+1]]) {
      if (row < 0 || m <= row || column < 0 || n <= column) {
        continue;
      }
      if (!roots.has(`${row},${column}`)) {
        continue;
      }
      if (roots.get(`${i},${j}`) === roots.get(`${row},${column}`)) {
        continue;
      }
      numIslands--;
      roots.forEach((root, land) => {
        if (land !== `${row},${column}` && root === roots.get(`${row},${column}`)) {
          roots.set(land, `${i},${j}`);
        }
      });
      roots.set(`${row},${column}`, `${i},${j}`);
    }
    result.push(numIslands);
  });
  return result;
};
*/

function find(parent, land) {
  while (parent.get(land) != land) {
  }
}

function numIslands2(m: number, n: number, positions: [number, number][]) {
  const result = [];
  const parent = new Map();
  let numIslands = 0;
  positions.forEach(([i, j]) => {
    parent.set(`${i},${j}`, `${i},${j}`);
    numIslands++;
    for (const [row, column] of [[i-1, j], [i+1, j], [i, j-1], [i, j+1]]) {
      if (row < 0 || m <= row || column < 0 || n <= column) {
        continue;
      }
      if (!roots.has(`${row},${column}`)) {
        continue;
      }
      if (roots.get(`${i},${j}`) === roots.get(`${row},${column}`)) {
        continue;
      }
      numIslands--;
      roots.forEach((root, land) => {
        if (land !== `${row},${column}` && root === roots.get(`${row},${column}`)) {
          roots.set(land, `${i},${j}`);
        }
      });
      roots.set(`${row},${column}`, `${i},${j}`);
    }
    result.push(numIslands);
  });
  return result;
}

module.exports = {
  numIslands2,
};
