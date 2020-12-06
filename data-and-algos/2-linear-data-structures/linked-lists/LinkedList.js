// Linked Lists
// Link together nodes using the next property
// Not required to be sequentially located in memory
// Have: head node
// Common operations: adding nodes, removing nodes, finding nodes, traversing LL
// Depending on language, nodes which are not referenced are removed automatically


const Node = require('./Node.js');


class LinkedList {
  constructor() {
    this.head = null;
  }

  addToHead(data) {
    const newHeadNode = new Node(data);
    const currentHeadNode = this.head;
    this.head = newHeadNode;
    if (currentHeadNode) { // if the current head was !== null
      newHeadNode.setNextNode(currentHeadNode);
    }
  }

  addToTail(data) {
    const newTailNode = new Node(data);
    let tail = this.head;
    if (!tail) {
      this.head = newTailNode;
    } else {
      while(tail.getNextNode() !== null) {
        tail = tail.getNextNode(); // sets tail to the last node
      }
      tail.setNextNode(newTailNode);
    }
  }

  removeHead() {
    const removedHead = this.head;
    if (!removedHead) {
      return;
    } else {
      this.head = removedHead.getNextNode();
      return removedHead.data; // don't forget to return the data value of the removed head
    }
  }

  printList() {
    let currentNode = this.head;
    let output = '<head> ';
    while(currentNode !== null) {
      output += currentNode.data + ' ';
      currentNode = currentNode.getNextNode();
    }
    output += '<tail>';
    console.log(output);
  }
}

module.exports = LinkedList;