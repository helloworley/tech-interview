// O(log n)
// because n is / 2 every iteration
// it's actually log2 of n but we drop constants

function divideByTwo(n) {
  let countIterations = 0;
  while (n > 1) {
    n = n / 2;
    countIterations++;
  }
  return countIterations;
}


// O(n)
// because we traverse the list 1 time, dependant on the input value

function findMax(list) {
  let current = list.head;
  let maxVal = current.data;
  while (current.getNextNode() !== null) {
    current = current.getNextNode();
    let currentVal = current.data;
    if (currentVal > maxVal) {
      maxVal = currentVal;
    } 
  }
  return maxVal;
}


// O(n^2)
// There is a nested while loop in the function

function sortLinkedList(list) {
  let newList = new LinkedList();
  while (list.head !== null) {
    let currentMax = findMax(list); // nested loop
    list.remove(currentMax);
    newList.addToHead(currentMax);
  }
  return newList;
}


// Runtime: O(n)
// Time Complexity: O(n)
// Creates a new array variable

function doubleArray(inputArray) {
  const doubledArray = [];
  for (let i = 0; i < inputArray.length; i++) {
    doubledArray[i] = 2 * inputArray[i];
  }
  return doubledArray;
}

// Runtime: O(n)
// Time complexity: O(1)
// Doesn't create a new array variable
function findMin(inputArray) {
  let min = inputArray[0];
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] > min) {
      min = inputArray[i];
    }
  }
  return min;
}


