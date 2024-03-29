//get all prime numbers up to num
const sumPrime = (num) => {
  const isPrime = (num) => {
    let sqrt = Math.sqrt(num);
    for (let i = 2; i <= sqrt; i++) {
      if (num % i === 0) return false;
    }
    return true;
  };
  let sum = 0;
  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) sum += i;
  }
  return sum;
};
console.log(sumPrime(10));

//get list of prime numbers
const getPrime = (num) => {
  const isPrime = (num) => {
    let sqrt = Math.sqrt(num);
    for (let i = 2; i <= sqrt; i++) {
      if (num % i == 0) return false;
    }
    return true;
  };
  let allPrime = [];
  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) allPrime.push(i);
  }
  return allPrime;
};
console.log(getPrime(10));
