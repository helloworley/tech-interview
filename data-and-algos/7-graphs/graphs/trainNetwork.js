const Graph = require('./Graph.js');

const trainNetwork = new Graph(true, true);
const LA = trainNetwork.addVertex('Los Angeles');
const SF = trainNetwork.addVertex('San Francisco');
const NY = trainNetwork.addVertex('New York');
const Atlanta = trainNetwork.addVertex('Atlanta');
const Denver = trainNetwork.addVertex('Denver');
const Calgary = trainNetwork.addVertex('Calgary');

trainNetwork.addEdge(SF, LA, 400);
trainNetwork.addEdge(LA, SF, 400);
trainNetwork.addEdge(NY, Denver, 1800);
trainNetwork.addEdge(Denver, NY, 1800);
trainNetwork.addEdge(Calgary, Denver, 1000);
trainNetwork.addEdge(Denver, Calgary, 1000);
trainNetwork.addEdge(LA, Atlanta, 2100);
trainNetwork.addEdge(Atlanta, LA, 2100);

trainNetwork.removeEdge(NY, Denver);
trainNetwork.removeEdge(Calgary, Denver);
trainNetwork.removeEdge(Denver, Calgary);
trainNetwork.removeVertex(Calgary);

trainNetwork.print();