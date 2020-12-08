const testGraph = require('./testGraph.js');
const dijkstras = require('./dijkstras.js');

const shortestPathBetween = (graph, startingVertex, targetVertex) => {
  const { distances, previous } = dijkstras(graph, startingVertex);
  const distance = distances[targetVertex.data];
  const path = [];
  let vertex = targetVertex;
  while(vertex !== null) {
    path.unshift(vertex); // pushes the previous vertex into the beginning of the path array
    vertex = previous[vertex.data];
  }
  return { distance, path };
}

// Retrieve the shortest path between vertices A and G
const a = testGraph.getVertexByValue('A');
const g = testGraph.getVertexByValue('G');
const results = shortestPathBetween(testGraph, a, g);

console.log(results);

module.exports = shortestPathBetween;