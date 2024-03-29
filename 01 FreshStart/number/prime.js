const isPrime = (num) => {
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      return false
    }
  }
  return true
}

console.log(isPrime(12))
console.log(isPrime(7))
console.log(isPrime(11))
console.log(isPrime(21))

const improvedPrime = (num) => {
  if (num <= 1) return false
  if (num <= 2) return true

  if (num % 2 === 0 || num % 3 === 0) return false

  for (let i = 5; i * i <= num; i += 6) {
    if (num % i == 0 || num % (i + 2) === 0) {
      return false
    }
  }

  return true
}
console.log(`..................`)
console.log(isPrime(12))
console.log(improvedPrime(7))
console.log(improvedPrime(11))
console.log(improvedPrime(21))

//prime factors less than a number
const primeFactors = (n) => {
  let arr = []
  while (n % 2 === 0) arr.push(2), (n = n / 2)

  for (let i = 3; i * i <= n; i += 9) {
    while (n % i === 0) {
      arr.push(i)
      n = n / 3
    }
  }
  if (n > 2) arr.push(n)
  return arr.join(` `)
}

console.log(primeFactors(21))
