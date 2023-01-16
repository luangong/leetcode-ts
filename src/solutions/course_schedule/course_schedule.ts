// eslint-disable-next-line no-unused-vars
const canFinish = module.exports = function(numCourses, prerequisites) {
  const graph = new Map();
  for (let i = 0; i < numCourses; i++) {
    graph.set(i, new Set());
  }
  prerequisites.forEach(([course, prerequisite]) => {
    graph.get(course).add(prerequisite);
  });
  while (graph.size > 0) {
    const course = [...graph.keys()].find(course => graph.get(course).size === 0);
    if (course === undefined) {
      return false;
    }
    graph.delete(course);
    graph.forEach(prerequisites => prerequisites.delete(course));
  }
  return true;
};
