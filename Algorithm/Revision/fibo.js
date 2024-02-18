const fibo = (num) => {
  let curr = 1;
  let prev = 0;
  let result = 0;
  let fiboList = 0;

  while (curr <= num) {
    //get the list of fibonaccai
    fiboList += ", ";
    fiboList += curr;
    //get the sum of only odd members of the list
    if (curr % 2 !== 0) {
      result += curr;
    }
    curr = curr + prev;
    prev = curr - prev;
  }
  console.log(fiboList);
  return result;
};
console.log(fibo(10));
