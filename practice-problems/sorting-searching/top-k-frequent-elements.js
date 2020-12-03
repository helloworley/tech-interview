// Given a non-empty array of integers, return the k most frequent elements.



const mostFrequentElements = (nums, k) => {
  const map = new Map();
  const answer = [];

  for (let num of nums) {
    if (map[num] === undefined) {
      map[num] = 1;
    } else {
      map[num] ++;
    }
  }

  console.log('map', map);

  let max = Math.max(map.values());
    console.log(Math.max(...map.values()));

  for (let i; i < k; i++) {
    
  }

  
}



console.log(mostFrequentElements([1,1,1,2,2,3], 2));