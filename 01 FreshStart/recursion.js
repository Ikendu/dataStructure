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

//pascal triangle
const pascalTri = (row, col) => {
  if (col == 0) return 1
  if (row == 0) return 0

  return pascalTri(row - 1, col) + pascalTri(row - 1, col - 1)
}
console.log(`Pascal`)
console.log(pascalTri(5, 2))

//flatened Object
const flatenedObj = (dictionary) => {
  let flatdictionary = {}
  const flatenedHelper = (dictionary, propName) => {
    if (typeof dictionary != `object`) {
      flatdictionary[propName] = dictionary
      return
    }
    for (prop in dictionary) {
      if (propName == ``) {
        flatenedHelper(dictionary[prop], propName + prop)
      } else {
        flatenedHelper(dictionary[prop], propName + `.` + prop)
      }
    }
  }

  flatenedHelper(dictionary, ``)
  return flatdictionary
}

const flatdic = flatenedObj({
  key1: `valu1`,
  key2: { key3: { key4: `valu2`, key5: `valu3`, key6: `valu4` }, key7: `valu5` },
  key8: { key12: `valu6`, key11: { key9: `valu10` } },
})
console.log(flatdic)
