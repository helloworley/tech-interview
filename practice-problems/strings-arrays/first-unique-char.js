// Given a string, find the first non-repeating character in it and return its index. If it doesn't exist, return -1.


// @param {string} s
// @return {number}

const string = 'leetcode';


var firstUniqueChar = function(string) {
  const frequencies = {};
  let result = -1;

  for (let char of string) {
    if (frequencies[char] === undefined) {
      frequencies[char] = 1;
    } else {
      frequencies[char] ++;
    }
  }

  for (let i = 0; i < string.length; i++) {
    let char = string.charAt();
    if (frequencies[char] === 1) {
      result = i;
    }
  }

  return result;
}