const printDownToZero = (n) => {
  if (n < 0) {
    return `Done`
  }
  console.log(n)
  printDownToZero(n - 2)
}
printDownToZero(10)

//fibunacci sequence
console.log(`FIBUNACCAI SEQUENCE`)
const fibunacci = (n) => {
  if (n <= 1) {
    return n
  }
  let last = 0
  let lasty = 1
  sum = 0
  for (i = 1; i < n; i++) {
    sum = last + lasty
    lasty = last
    last = sum
    console.log(sum)
  }
  return sum
}
console.log(fibunacci(10))

console.log(`Recursive Fibunacci`)
const fibunaRecurs = (n) => {
  if (n <= 1) return n
  else {
    return fibunaRecurs(n - 1) + fibunaRecurs(n - 2)
  }
}

console.log(fibunaRecurs(9))

const betterFibu = (n, last, lasty) => {
  if (n == 0) return lasty
  if (n == 1) return last
  return betterFibu(n - 1, last + lasty, last)
}

console.log(betterFibu(10, 1, 0))
