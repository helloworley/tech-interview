const Node = require('../2-linear-data-structures/1-linked-lists/Node.js');

class LinkedList {
  constructor() {
    this.head = null;
  }

  // Other methods

  findNodeIteratively(data) {
    let current = this.head;
    while (current !== null) {
      if (current.data = data) {
        return current;    
      }
      current = current.next;
    }
    return null;
  }

  findNodeRecursively(data, currentNode = this.head) {
    if (currentNode === null) {
      return null;
    } else if (currentNode.data === data) {
      return currentNode;
    } else {
      return this.findNodeRecursively(data, currentNode.next); // recursion
    }
  }
}