// https://leetcode.com/problems/execute-asynchronous-functions-in-parallel/

export async function promiseAll<T>(functions: (() => Promise<T>)[]): Promise<T[]> {
  return Promise.all(functions.map(fn => fn()));
}

export async function promiseAll2<T>(functions: (() => Promise<T>)[]): Promise<T[]> {
  return new Promise((resolve, reject) => {
    const results: T[] = [];
    let resolvedCount = 0;
    for (let i = 0; i < functions.length; i++) {
      functions[i]().then(result => {
        results[i] = result;
        if (++resolvedCount === functions.length) {
          resolve(results);
        }
      }).catch(err => {
        reject(err);
      });
    }
  });
}
