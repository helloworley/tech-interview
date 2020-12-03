// Given a string s, find the length of the longest substring without repeating characters.
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

const string = 'abcabcbb';

const lengthOfLongestSubstring = s => {
  let set = new Set();
  let left = 0;
  let right = 0;
  let maxSubstringLength = 0;

  while(right < s.length) {
    if (!set.has(s.charAt(right))) { // if the set does not have the char at the right
      set.add(s.charAt(right)); // then add the char at the right
      maxSubstringLength = Math.max(maxSubstringLength, set.size); // the longest length is either the current mx length or the size of the set
      right++; // move the right pointer 1
    } else {
      set.delete(s.charAt(left)); // delete the char at the left
      left++; // move the left pointer 1
    }
  }
  return maxSubstringLength; // return the length
}

console.log(lengthOfLongestSubstring(string)); 
