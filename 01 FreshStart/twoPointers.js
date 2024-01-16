let a = [`r`, `a`, `c`, `e`, `c`, `a`, `r`]
//let b = [`r`, `a`, `c`, `e`, `c`, `a`, `r`]
let b = `racecar`

//console.log(a)

const newFunc = (a, b) => {
  let i = 0
  let j = a.length - 1

  while (i < j) {
    if (a[i] !== a[j]) {
      return false
    }
    i++
    j--
  }
  return true
}

const ans = newFunc(b)
console.log(ans)

let ab = [1, 3, 2, 5, 7, 4, 10, 12]
let num = 17

const getSum = (ab, num) => {
  let sorted = ab.sort((a, b) => a - b)
  let i = 0
  let j = sorted.length - 1

  while (i < j) {
    let ans = sorted[i] + sorted[j]

    if (ans > num) j--
    if (ans < num) i++

    console.log(ans)
    if (ans == num) {
      return `found`
    }
  }
  return false
}
const ans2 = getSum(ab, num)

console.log(ans2)

let arry1 = [5, 2, 5, 1, 0, 45, 20, 10, 6]
let arry2 = [9, 7, 4, 22, 33, 19, 201, 111, 99, 55]

const combined = (arry1, arry2) => {
  let sorted1 = arry1.sort((a, b) => a - b)
  let sorted2 = arry2.sort((a, b) => a - b)
  let i = 0
  let j = 0
  let ans = []

  while (i < sorted1.length && j < sorted2.length) {
    if (sorted1[i] < sorted2[j]) {
      ans.push(sorted1[i])
      i++
    } else {
      ans.push(sorted2[j])
      j++
    }
  }
  while (i < sorted1.length) {
    ans.push(sorted1[i])
    i++
  }
  while (j < sorted2.length) {
    ans.push(sorted2[j])
    j++
  }
  return ans
}

const combined2 = (arr1, arr2) => {
  return [...arr1, ...arr2].sort((a, b) => a - b)
}

console.log(combined(arry1, arry2))
console.log(combined2(arry1, arry2))

let aa = `aceg`
let bb = `abcdefg`
//console.log(aa[2])

const subsequence = (aa, bb) => {
  // aa = aa.split(``)
  // bb = bb.split(``)
  let i = 0,
    j = 0
  while (i < aa.length && j < bb.length) {
    if (aa[i] == bb[j]) i++
    j++
  }
  return i == aa.length
  // console.log(aa, aa.length, bb.length)
  // console.log(ans)
  // if (ans.length === aa.length) return true
  // else return false
}
console.log(subsequence(aa, bb))
