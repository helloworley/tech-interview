// This implementation of a HashMap is an array of Linked Lists.
// We store values at indexes using keys.
// The indexes are the result of running a hash function on the key.
// The data in each Node of each Linked List is a key value pair.

const LinkedList = require('../2-linear-data-structures/1-linked-lists/LinkedList.js');
const Node = require('../2-linear-data-structures/1-linked-lists/Node.js');

class HashMap {
  constructor(size = 0) {
    this.hashmap = new Array(size).fill(null).map(() => new LinkedList());
  }

  hash(key) { // this will always return the same hash for any given key
    let hashCode = 0;
    for (let i = 0; i < key.length; i++) {
      hashCode += key.charCodeAt(i);
    }
    const hash = hashCode % this.hashmap.length;
    console.log(`Created new hash: ${hash}`);
    return hash;
  }

  assign(key, value) {
    const arrayIndex = this.hash(key);
    const linkedList = this.hashmap[arrayIndex];
    console.log(`Storing ${value} at ${arrayIndex}`);
    if (linkedList.head === null) {
      linkedList.addToHead({ key, value});
      return;
    }
    let current = linkedList.head;
    while (current) {
      if (current.data.key === key) { // rewrite the value at key if key already exists
        current.data = { key, value };
      }
      if (!current.next) { // otherwise add the value to a new node at the end
        current.next = new Node({ key, value});
        break;
      }
      current = current.next;
    }
  }

  retrieve(key) {
    const arrayIndex = this.hash(key);
    let current = this.hashmap[arrayIndex].head;
    while (current) {
      if (current.data.key === key) {
        console.log(`\nRetrieving ${current.data.value} from index ${arrayIndex}`);
        return current.data.value;
      }
      current = current.next;
    }
    return null;
  }
}

module.exports = HashMap;