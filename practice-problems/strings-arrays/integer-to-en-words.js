// Convert a non-negative integer num to its English words representation

// Input: num = 123
// Output: "One Hundred Twenty Three"

// @param {number} num
// @return {string}

const singleDigit = num => {
  let numToEnglish = '';
  switch (num) {
    case '1':
      numToEnglish ='One';
      break;
    case '2':
      numToEnglish ='Two';
      break;
    case '3':
      numToEnglish ='Three';
      break;
    case '4':
      numToEnglish ='Four';
      break;
    case '5':
      numToEnglish ='Five';
      break;
    case '6':
      numToEnglish ='Six';
      break;
    case '7':
      numToEnglish ='Seven';
      break;
    case '8':
      numToEnglish ='Eight';
      break;    
    case '9':
      numToEnglish ='Nine';
      break;
  }
  return numToEnglish;
};

const doubleDigitsLessThan20 = num => {
  let numToEnglish = '';
  switch (num) {
    case '10':
      numToEnglish ='Ten';
      break;
    case '11':
      numToEnglish ='Eleven';
      break;
    case '12':
      numToEnglish ='Twelve';
      break;
    case '13':
      numToEnglish ='Thirteen';
      break;
    case '14':
      numToEnglish ='Fourteen';
      break;
    case '15':
      numToEnglish ='Fifteen';
      break;
    case '16':
      numToEnglish ='Sixteen';
      break;
    case '17':
      numToEnglish ='Seventeen';
      break;    
    case '18':
      numToEnglish ='Eighteen';
      break;
    case '19':
      numToEnglish ='Nineteen';
      break;
  }
  return numToEnglish;
}

const multiplesOfTen = num => {
  let numToEnglish;
  switch (num) {
    case '2':
      numToEnglish = 'Twenty';
      break;
    case '3':
      numToEnglish = 'Thirty';
      break;
    case '4': 
      numToEnglish = 'Forty';
      break;
    case '5':
      numToEnglish = 'Fifty';
      break;
    case '6':
      numToEnglish = 'Sixty';
      break;
    case '7':
      numToEnglish = 'Seventy';
      break;
    case '8':
      numToEnglish = 'Eighty';
      break;
    case '9':
      numToEnglish = 'Ninety';
      break;
  }  
  return numToEnglish;
}


const doubleDigits = (firstDig, secondDig) => {
  let res;
  let bothDig = firstDig + secondDig;
  // console.log('both digits', bothDig)
  if (bothDig.charAt(0) === '0') {
    res = singleDigit(secondDig);
  }
  if (bothDig.charAt(0) === '1') {
    res = doubleDigitsLessThan20(bothDig);
  } else {
    firstDigText = multiplesOfTen(firstDig);
    secondDigText = singleDigit(secondDig);
    if (!secondDigText) {
      res = firstDigText;
    } else {
      res = `${firstDigText} ${secondDigText}`;
    }
  }
  return res;
}


const tripleDigits = num => {
  let res;
  const numLength = num.toString().length;
  let firstPlace;
  let secondPlace;
  let thirdPlace;


  if (numLength > 0) { // the places are in descending order
    firstPlace = num.charAt(0);
  }
  if (numLength > 1) {
    secondPlace = num.charAt(1);
  }
  if (numLength > 2) {
    thirdPlace = num.charAt(2);
  }
  
  if (thirdPlace) {
    res = `${singleDigit(firstPlace)}`;
    if (firstPlace !== '0') {
      res = res + ' Hundred';
    }
    if (secondPlace !== '0') {
      res = res + ` ${doubleDigits(secondPlace, thirdPlace)}`;
    } else if (secondPlace === '0' && thirdPlace !== '0') {
      res = res + ` ${singleDigit(thirdPlace)}`;
    }
  } else if (secondPlace) {
    res = `${doubleDigits(firstPlace, secondPlace)}`;
  } else if (firstPlace) {
    res = singleDigit(firstPlace);
  }
  
  // console.log('response', res)
  return res;
}


const numberToWords = function(num) {
  if (num === 0) {
    return "Zero";
  }

  let numToString = num.toString();
  const numLength = numToString.length;
  const firstThree = numToString.substring(numLength - 3, numLength);
  const secondThree = numToString.substring(numLength - 6, numLength - 3);
  const thirdThree = numToString.substring(numLength - 9, numLength - 6);
  const fourthThree = numToString.substring(numLength - 12, numLength - 9);
  // console.log('firstThree', firstThree);
  // console.log('secondThree', secondThree);
  // console.log('thirdThree', thirdThree);
  // console.log('fourthThree', fourthThree);

  let result = '';

  if (fourthThree !== '') {
    result = tripleDigits(fourthThree) + ' Billion';
  }
  if (thirdThree !== '') {
    if (!result.length < 1) {
      result += ' ';
    }
    result += tripleDigits(thirdThree) + ' Million';
  }
  if (secondThree != '') {
    if (!result.length < 1) {
      result += ' ';
    }
    result += tripleDigits(secondThree) + ' Thousand';
  }
  if (firstThree != '') {
    if (!result.length < 1 && firstThree !== '000') {
      result += ' ';
    }
    result += tripleDigits(firstThree);
  }
  return result;
};


console.log(numberToWords(42367842731));
console.log(numberToWords(12345));
console.log(numberToWords(100));
console.log(numberToWords(134));
console.log(numberToWords(101));
console.log(numberToWords(1000));
console.log(numberToWords(12345));

// didn't want to spend any more time with this one
console.log(numberToWords(1001));
