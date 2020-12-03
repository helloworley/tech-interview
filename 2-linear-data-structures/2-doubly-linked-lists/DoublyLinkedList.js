// Doubly Linked List
// Basically a LL with an extra link to the node before it
// Bidirectional
// Have: head, tail
// Their nodes have:  next, previous
// Common operations: 
//  - adding to both ends
//  - removing from both ends
//  - finding and removing anywhere in the list
//  - traversing the list

const Node = require('./Node');

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addToHead(data) {
    const newHead = new Node(data);
    const currentHead = this.head;
    if (currentHead) {
      currentHead.setPreviousNode(newHead);
      newHead.setNextNode(currentHead);
    } 
    this.head = newHead;
    if (!this.tail) {
      this.tail = newHead;
    }
  }

  addToTail(data) {
    const newTail = new Node(data);
    const currentTail = this.tail;
    if (currentTail) {
      currentTail.setNextNode(newTail);
      newTail.setPreviousNode(currentTail);
    }
    this.tail = newTail;
    if (!this.head) {
      this.head = newTail;
    }
  }

  removeHead() {
    const removedHead = this.head;
    if (!removedHead) {
      return null;
    }
    const newHead = removedHead.getNextNode();
    this.head = newHead;
    if (newHead) {
      this.head.setPreviousNode(null);  
    }
    if (removedHead === this.tail) {
      this.removeTail();
    }
    return removedHead;
  }

  removeTail() {
    const removedTail = this.tail;
    if (!removedTail) {
      return null;
    }
    const newTail = removedTail.getPreviousNode();
    this.tail = newTail;
    if (this.tail !== null) {
      this.tail.setNextNode(null);
    }
    if (removedTail === this.head) {
      this.removedHead();
    }
    return removedTail.data;
  }

  removeByData(data) {
    let nodeToRemove;
    // cycle through all of the nodes
    let currentNode = this.head;
    while(currentNode !== null) {
      if (data === currentNode.data ) {
        nodeToRemove = currentNode;
        break;
      }
      currentNode = currentNode.getNextNode();
    }
    if (!currentNode) {
      return;
    }
    if (nodeToRemove === this.head) {
      removedHead();
    } else if (nodeToRemove === this.tail) {
      this.removeTail();
    } else {
      const previousNode = nodeToRemove.getPreviousNode();
      const nextNode = nodeToRemove.getNextNode();
      previousNode.setNextNode(nextNode);
      nextNode.setPreviousNode(previousNode);
    }
    return nodeToRemove;
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

module.exports = DoublyLinkedList;