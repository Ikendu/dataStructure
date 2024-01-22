const compareTwoObjects = (obj1, obj2) => {
  let obj1Props = Object.getOwnPropertyNames(obj1)
  let obj2Props = Object.getOwnPropertyNames(obj2)

  if (obj1Props.length !== obj2Props.length) return false

  for (let i = 0; i < obj1Props.length; i++) {
    let props = obj1Props[i]
    if (obj1[props] !== obj2[props]) return false
  }
  return true
}

let first = { a: 20, ada: `hello`, obi: `come here plz` }
let second = { bcd: 20, ada: `hello`, obi: `come here plz` }

console.log(compareTwoObjects(first, second))

const isPrime = (n) => {
  //prime numbers are numbers that can be divided by one and itself
  if (n <= 1) return false
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false
  }
  return true
}

console.log(isPrime(7))
