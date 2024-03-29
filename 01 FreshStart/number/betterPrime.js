//reducing time complexity by sqrt in prime checking
function betterPrime(n) {
  if (n <= 1) return false;
  if (n <= 3) return true;

  if (n % 2 === 0 || n % 3 === 0) return false;

  for (let i = 5; i * i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

console.log(betterPrime(10));
console.log(betterPrime(3));
console.log(betterPrime(111));
console.log(betterPrime(11));
console.log(betterPrime(64));
