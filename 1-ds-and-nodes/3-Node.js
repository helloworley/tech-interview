// Nodes form the basis of
// Linked Lists, Stacks, Queues, Trees, & more
// Contain data & links to other nodes
// IF the link === null, you have reached the end of the path

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }

  setNextNode(node) {
    if (node instanceof Node || node !== null) {
      this.next = node;
    } else {
      throw new Error('Expected input type Node');
    }
  }

  getNextNode(node) {
    return this.next;
  }
}


const strawberryNode = new Node('Berry Tasty');
const vanillaNode = new Node('Vanilla');
const coconutNode = new Node('Coconutty');
strawberryNode.setNextNode(vanillaNode);
vanillaNode.setNextNode(coconutNode);

let currentNode = strawberryNode;
while(currentNode !== null) {
  console.log(currentNode.data);
  currentNode = currentNode.getNextNode();
}

module.exports = Node;