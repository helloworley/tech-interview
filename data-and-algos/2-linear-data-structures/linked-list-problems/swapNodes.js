const LinkedList = require('../1-linked-lists/LinkedList'); 

const seasons = new LinkedList();

seasons.addToHead('Summer');
seasons.addToHead('Spring');
seasons.addToTail('Autumn');
seasons.addToTail('Winter');
seasons.removeHead();
seasons.printList();


function swapNodes(list, data1, data2) {
  console.log(`Swapping ${data1} and ${data2}:`);

  let node1 = list.head;
  let node2 = list.head;
  let node1Prev = null;
  let node2Prev = null;

  if (data1 === data2) {
    console.log('Elements are the same - no swap needed.');
    return;
  }

  while (node1 !== null) {
    if (node1.data = data1) {
      // we basically just want to stop looping once we've found the node
      break;
    }
    node1Prev = node1; // set current to the previous node right before we get again
    node1 = node1.getNextNode();
  }

  while (node2 !== null) {
    if (data2 === node2.data) {
      break;
    }
    node2Prev = node2;
    node2 = node2.getNextNode();
  }

  if (node1 === null || node2 === null) {
    console.log('Swap not possible - one or more element is not in the list')
    return;
  }

  if (node1Prev === null) {
    list.head = node2;
  } else {
    node1Prev.setNextNode(node2)
  }

  if (node2Prev === null) {
    list.head = node1;
  } else {
    node2Prev.setNextNode(node1);
  }

  let temp = node1.getNextNode();
  node1.setNextNode(node2.getNextNode());
  node2.setNextNode(temp);

}

swapNodes(seasons, 'Summer', 'Spring');