//intersection of set
const intersection = (setA, setB) => {
  let intersect = new Set()

  for (ele of setA) {
    if (setB.has(ele)) intersect.add(ele)
  }
  return Array.from(intersect)
    .sort((a, b) => a - b)
    .join(` `)
}
let setA = new Set([2, 3, 4, 5, 1, `a`, `b`])
let setB = new Set([1, 3, 2, `a`, `b`])
console.log(intersection(setA, setB))

//superSet
const checkSuper = (setA, setB) => {
  for (ele of setB) {
    if (!setA.has(ele)) return false
  }
  return true
}
console.log(`check super`)
console.log(checkSuper(setA, setB))

//union of two set
const unionSet = (setA, setB) => {
  const array1 = Array.from(setA)
  const array2 = Array.from(setB)
  return new Set([...array1, ...array2])
}
//OR
const unionSet1 = (setA, setB) => {
  let union = new Set(setA)
  for (let ele of setB) {
    union.add(ele)
  }
  return union
}
console.log(`union of set`)
console.log(unionSet1(setA, setB))

//difference of set
const differenceSet = (setA, setB) => {
  let diff = new Set(setA)
  for (let ele of setB) {
    diff.delete(ele)
  }
  return diff
}
console.log(`difference of sets`)
console.log(differenceSet(setA, setB))

//check for duplicate in an array
const checkDuplicate = (arr) => {
  let setA = new Set(arr)
  return setA.size < arr.length
}
console.log(checkDuplicate([2, 3, 4, 1, 5, 6, 1]))

//return unique arrays
const uniqueArray = (arr1, arr2) => {
  return Array.from(new Set(arr1.concat(arr2)))
}
console.log(uniqueArray([1, 2, 3, `a`, `b`], [3, 5, 6, `a`, `c`]))
