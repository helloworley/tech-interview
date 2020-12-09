/**
 * @param {number} num
 * @return {string}
 */
// var intToRoman = function(num) {
//   if (num > 3999 || num < 1) return;

//   let result = '';
  
//   const map = new Map([
//     [1, 'I'],
//     [5, 'V'],
//     [10, 'X'],
//     [50, 'L'],
//     [100, 'C'],
//     [500, 'D'],
//     [1000, 'M']
//   ]);
  
//   let fourthDigit, thirdDigit, secondDigit, firstDigit;

//   if (num > 999) {
//     fourthDigit = Math.floor(num % 10000 / 1000);
//   }
//   if (num > 99) {
//     thirdDigit = Math.floor(num % 1000 / 100);
//   }
//   if (num > 9) {
//     secondDigit = Math.floor(num % 100 / 10);
//   }

//   firstDigit = num % 10;
//   result += map.get()

//   // console.log(fourthDigit, thirdDigit, secondDigit, firstDigit);
//   return result;
  
// };


function intToRoman(num) {
  const map = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 };
  let result = '';
  Object.entries(map).forEach(([letter, n]) => {
      // console.log('num', num);
      // console.log('n', n);
      // console.log('num %= n', num %= n);
      // console.log('result', result);    
      // console.log('letter', letter);
      // console.log(Math.floor( num / n))
      // console.log(letter.repeat(Math.floor(num / n)))
      result += letter.repeat(Math.floor(num / n));
      num %= n;
      console.log('num %= n', num %= n);
  });
  
  return result;
}



console.log(intToRoman(1994));