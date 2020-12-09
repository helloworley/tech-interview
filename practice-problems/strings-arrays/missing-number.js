

var missingNumber = function(nums) {
  nums.sort((a,b) => a - b);
  let result;
  
  const map = {};
  for (let i = 0; i < nums.length + 1; i++) {
    map[i] = nums.includes(i) ? true : false;
  }
  Object.entries(map).forEach( entry => {
    if (entry[1] === false) result = entry[0];
  });
  return result;
};


var missingNumber = function(nums) {
  let sum = 0, total = 0
  for(let i = 0; i < nums.length; i++) {
      sum += nums[i]
      total += i + 1
  }
  return total - sum
};



var missingNumber = function(nums) {
  let len = nums.length;//length of array.
  let sum = (len*(len+1))/2; // sum of all nos from 0 to n by series formula
  let sum2 = nums.reduce((a,c)=> a+c); //sum of array elements.
  return sum-sum2; //difference is the answer
};

const missingNumber = nums => nums.reduce((a, e) => a - e, (nums.length * (nums.length + 1)) / 2);


console.log(missingNumber([3,0,1]));
console.log(missingNumber([0,1]));
console.log(missingNumber([9,6,4,2,3,5,7,0,1]));