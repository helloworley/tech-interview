const LinkedList = require('../1-linked-lists/LinkedList.js');
  
class Queue {
  constructor(maxSize = Infinity) {
    this.queue = new LinkedList();
    this.maxSize = maxSize;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  hasRoom() {
    return this.size < this.maxSize;
  }

  enqueue(data) {
    if (this.hasRoom()) { // to prevent queue overflow
      this.queue.addToTail(data);
      this.size ++;
    } else {
      throw new Error('Queue is full!');
    }
  }

  dequeue() {
    if (this.size !== 0) { // to prevent underflow
      const oldHead = this.queue.removeHead();
      this.size --;
      return oldHead;
    } else {
      throw new Error('Queue is empty!');
    }
  }
}

module.exports = Queue;