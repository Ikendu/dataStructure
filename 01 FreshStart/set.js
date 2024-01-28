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
console.log(`union of set`)
console.log(unionSet(setA, setB))
