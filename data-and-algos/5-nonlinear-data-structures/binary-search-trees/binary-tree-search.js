const BinaryTree = require('./BinaryTree.js');
let randomize = () => Math.floor(Math.random() * 40);
const bt = new BinaryTree(15);
let numbers = [];

for (let i = 0; i < 15; i++) {
  numbers.push(randomize());
  bt.insert(numbers[i]);
}

console.log(`Inserted [ ${numbers} ] into the Binary Tree.`);

console.log('Depth First Traversal');
bt.depthFirstTraversal();