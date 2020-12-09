// unfinished.
// can't figure out how to check if an array includes an array


const twoSum = (nums, i, results) => {
  const num = nums[i];
  let p1 = nums[i + 1];
  let p2 = nums[nums.length - 1];
  
  while (p1 < p2) {
      const sum = nums[i] + p1 + p2;
      if (sum < 0) {
          p1 ++;
      } else if (sum > 0) {
          p2 --;
      } else if (sum === 0) {
          
          const result = [num, p1, p2];
          // console.log('results', results);
          // console.log('result', result);
          // console.log(results.includes(result));
          if (!results.includes(result)) { // this is giving a false negative
            results.push(result);
          }
          p1 ++;
          p2 --;
      }
  }
  
  return results;
  
}

var threeSum = function(nums) {
  const sortedNums = nums.sort((a, b) => a - b); // ascending sort
  const results = [];

  for (let i = 0; i < sortedNums.length; i++) {
    results.concat(twoSum(sortedNums, i, results));
  }

  // console.log('results', results);
  return results;
};


const testArray = [-1,0,1,2,-1,-4];

console.log(threeSum(testArray));