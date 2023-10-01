// https://leetcode.com/problems/join-two-arrays-by-id/

export function join(arr1: any[], arr2: any[]): any[] {
  return [...arr1.concat(arr2).reduce((map, item) => {
    if (!map.has(item.id)) {
      map.set(item.id, item);
    } else {
      map.set(item.id, { ...map.get(item.id), ...item });
    }
    return map;
  }, new Map()).values()].sort((a, b) => a.id - b.id);
}
