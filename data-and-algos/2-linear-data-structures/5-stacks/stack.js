const LinkedList = require('../1-linked-lists/LinkedList.js');

class Stack {
  constructor(maxSize = Infinity) {
    this.stack = new LinkedList();
    this.maxSize = maxSize;
    this.size = 0;
  }

  hasRoom() {
    return this.size < this.maxSize;s
  }

  isEmpty() {
    return this.size === 0;
  }

  push(data) {
    if (this.hasRoom()) {
      this.stack.addToHead(data);
      this.size ++;
    } else {
      throw new Error('The Stack is full!');
    }
  }

  pop() {
    if (!this.isEmpty()) {
      const value = this.stack.removeHead();
      this.size --;
      return value;
    } else {
      throw new Error('The Stack is empty!');
    }
  }

  peek() {
    if (!this.isEmpty()) {
      return this.stack.head.data;
    } else {
      return null;
    }
  }
}

module.exports = Stack;