// recursively splits the arrays in half
const mergeSort = (startArray) => {
  const length = startArray.length;
  if (length === 1) {
    return startArray;
  }
  
  const mid = Math.floor(length / 2);
  const leftArray = startArray.slice(0, mid);
  const rightArray = startArray.slice(mid, length);

  return merge(mergeSort(leftArray), mergeSort(rightArray))
}

// orders and merges the individual slices
const merge = (leftArray, rightArray) => {
  let sortedArray = [];
  
  while(leftArray.length > 0 && rightArray.length > 0) {
    if (leftArray[0] < rightArray[0]) {
      sortedArray.push(leftArray[0]);
      leftArray.shift();
    } else {
      sortedArray.push(rightArray[0]);
      rightArray.shift();
    }
  }
  // either leftArray or rightArray will still have elements in it after the while loop.
  // the .concat() method will add the remaining elements from this array to sortedArray.
  sortedArray = sortedArray.concat(leftArray).concat(rightArray);
  console.log('sorted array', sortedArray);
  return sortedArray;
}


const inputArr = [3, 5, 2, 90, 4, 7];

console.log(mergeSort(inputArr));

module.exports = {
  mergeSort
};