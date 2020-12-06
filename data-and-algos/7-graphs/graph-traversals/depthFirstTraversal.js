const testGraph = require('./testGraph.js');

const depthFirstTraversal = (start, callback, visitedVertices = [start]) => {
  callback(start);

  // each vertex may or may not have edges to other verteces
  start.edges.forEach( edge => {
    const neighbor = edge.end;
    // have we visited this neighbor already?
    if (!visitedVertices.includes(neighbor)) {
      visitedVertices.push(neighbor);
      depthFirstTraversal(neighbor, callback, visitedVertices);
    }
  });
}

const callback = vertex => {
  console.log(vertex.data);
}

depthFirstTraversal(testGraph.vertices[0], callback);