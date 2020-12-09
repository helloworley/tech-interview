var trap = function(heights) { // height is an array of building heights
  if (heights === null) {
    return 0;
  }

  let totalWater = 0;
  let length = heights.length;
  let leftMax = [];
  let rightMax = [];

  leftMax[0] = heights[0];
  for (let i = 1; i < length; i++) {
    leftMax[i] = Math.max(heights[i], leftMax[i - 1]);
  }

  rightMax[length - 1] = heights[length - 1];
  for (let i = length - 2; i < length; i--) {
    rightMax[i] = Math.max(heights[i], rightMax[i + 1]);
  }

  for (let i = 1; i < length - 1; i++) { // there can't be any water on the left side of the first building
    totalWater += Math.min(leftMax[i], rightMax[i]) - heights[i];
  }

  return totalWater;
 }

