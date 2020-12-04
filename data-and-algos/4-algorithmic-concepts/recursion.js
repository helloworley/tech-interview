const recursiveFactorial = n => {
  if (n === 0)  {
    return 1;
  } else {
    return n * recursiveFactorial(n - 1);
  }
}

const iterativeFactorial = n => {
  result = 1;
  while(n > 0) {
    result *= n;
    n --;
  }
  return result;
}

// 1, 2, 6, 24, 120
console.log(recursiveFactorial(5));
console.log(iterativeFactorial(5));