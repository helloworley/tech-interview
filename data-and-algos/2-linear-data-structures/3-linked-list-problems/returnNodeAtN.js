const LinkedList = require('../1-linked-lists/LinkedList'); 

const testList = new LinkedList();

for (let i = 0; i < 10; i++) {
  testList.addToHead(i);
}

console.log('test list', testList);

const returnNodeAtN = (list, index) => {
  let p1 = list.head;
  let p2 = null;
  let count = 0;

  while (p1 !== null) {
    p1 = p1.getNextNode();
    if (count >= index) {
      if (!p2) {
        p2 = list.head;
      }
      p2 = p2.getNextNode();
    }
    count++;
  }

  return p2;
}



const returnValueAtMiddle = list => {
  let p1 = list.head;
  let p2 = list.head;

  while (p1 !== null) {
    p1 = p1.getNextNode();
    if (p1.getNextNode === null) {
      return p2;
    } else {
      p1 = p1.getNextNode();
      p2 = p2.getNextNode();
    }
  }
}