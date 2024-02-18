//get sum of fibonaccai numbers lower than or equal to num
const getSum = (num) => {
  let curr = 1;
  let prev = 0;
  let result = 0;

  while (curr <= num) {
    result += curr;
    curr += prev;
    prev = curr - prev;
  }
  return result;
};
console.log(getSum(4));

const getOddNum = (num) => {
  let curr = 1;
  let prev = 0;
  let result = 0;

  while (curr <= num) {
    if (curr % 2 !== 0) {
      result += curr;
    }
    curr += prev;
    prev = curr - prev;
  }
  return result;
};
console.log(getOddNum(4));
