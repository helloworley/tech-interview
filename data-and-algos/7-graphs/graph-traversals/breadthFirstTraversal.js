const testGraph = require('./testGraph.js');
const Queue = require('./Queue.js');

const breadthFirstTraversal = start => { // start is a vertex 
  const visitedVertices = [start]; // this keeps track of whih vertices we visited
  const visitQueue = new Queue; // this keeps track of the queue
  visitQueue.enqueue(start);
  while(!visitQueue.isEmpty()) {
    const current = visitQueue.dequeue();
    console.log(current.data);
    current.edges.forEach( edge => {
      const neighbor = edge.end;

      if (!visitedVertices.includes(neighbor)) {
        visitedVertices.push(neighbor);
        visitQueue.enqueue(neighbor);
      }
    });
  }
}

breadthFirstTraversal(testGraph.vertices[0]);