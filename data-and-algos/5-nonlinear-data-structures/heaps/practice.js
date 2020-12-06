const MinHeap = require('./MinHeap.js');
const minHeap = new MinHeap();

// populate the minHeap with descending numbers from 10001 to 1
console.log('Adding');
for (let i = 10000; i >= 1; i--) {
  minHeap.add(i);
}

// remove the minimum value from the heap
console.log('Removing');
console.log('Minimum value = ' + minHeap.popMin());
console.log(minHeap);