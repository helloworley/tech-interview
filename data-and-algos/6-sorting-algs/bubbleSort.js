const swap = require('./swap');

const bubbleSort = input => {
  console.log(`Array pre-sorted: ${input}`);
  let swapCount = 0;
  let swapping = true;
  
  while (swapping) {
    swapping = false;
    for (let i = 0; i < input.length - 1; i++) {
      if (input[i] > input[i + 1]) {
        swap(input, i, i + 1);
        swapCount++;
        swapping = true;
      }
    }
  }
  console.log(`Swapped ${swapCount} times`);
  console.log(`Array sorted: ${input}`);
  return input;
};

let arr = [];
for (let i = 0; i < 20; i++) {
  arr.push(Math.floor(Math.random() * 100));
}

bubbleSort(arr);

module.exports = bubbleSort;
