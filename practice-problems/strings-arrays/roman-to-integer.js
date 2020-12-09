/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  let result = 0;
  
  const map = new Map();
  map.set('I', 1);
  map.set('V', 5);
  map.set('X', 10);
  map.set('L', 50);
  map.set('C', 100);
  map.set('D', 500);
  map.set('M', 1000);
  
  
  if (s.includes('IV')) {
      // 4
      result += 4;
      s = s.replace('IV', '');
      console.log('hit', s);
  }
  if (s.includes('IX')) {
      // 9
      result += 9;
      s = s.replace('IX', '');
  }
  if (s.includes('XL')) {
      // 40
      result += 40;
      s = s.replace('XL', '');
  }
  if (s.includes('XC')) {
      // 90
      result += 90;
      s = s.replace('XC', '');
  }
  if (s.includes('CD')) {
      // 400
      result += 400;
      s = s.replace('CD', '');
  }
  if (s.includes('CM')) {
      // 900
      result += 900;
      s = s.replace('CM', '');
  }

  console.log(s);
  
  for (let digit of s) {
      result += map.get(digit);
  }
  
  return result;
};

console.log(romanToInt('IV'));