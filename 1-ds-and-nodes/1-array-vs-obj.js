// Objects are faster than Arrays for finding a value

//list of numbers
// 1, 250, -42, 0.4, 17

// Array implementation. We have to iterate over all numbers
const listOfNumbers = [];
const storeNumber = num => listOfNumbers.push(num);
const doYouHaveThisNumber = listOfNumbers.includes(num);

// Object implementation. Much faster if we just want to know if the number exists
const listOfNumbers = {};
const storeNumber = num => listOfNumbers[num] = true;
const doYouHaveThisNumber = listOfNumbers[num];