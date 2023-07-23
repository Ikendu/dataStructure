//checking factorial using reverse
const checkFactorial = (num) => {
  let product = 1;
  for (let i = num; i >= 1; i--) {
    product *= i;
  }
  return product;
};

console.log(checkFactorial(5));

const factorial = (num) => {
  let result = 1;

  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
};

console.log(factorial(4));
