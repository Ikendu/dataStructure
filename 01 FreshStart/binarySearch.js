const binarySearch = (array, n) => {
  array = array.sort((a, b) => a - b)
  //console.log(array)
  let startIdx = 0
  let lastIdx = array.length - 1

  while (startIdx <= lastIdx) {
    var midIdx = Math.floor((lastIdx + startIdx) / 2)
    //console.log(midIdx)
    if (array[lastIdx] == n) return lastIdx

    if (array[midIdx] == n) return midIdx
    else if (n > array[midIdx]) {
      startIdx = midIdx + 1
    } else {
      lastIdx = midIdx - 1
    }
  }
  return -1
}

console.log(binarySearch([1, 10, 30, 2, 3, 7, 4, 5, 6], 30))

//square root of a number
const naiveSqrt = (number) => {
  if (number == 1 || number == 0) return number
  let square = 1
  let index = 1
  while (square < number) {
    if (square == number) {
      return square
    }
    index++
    square = index * index
  }
  return index
}
console.log(naiveSqrt(0))

const binarySqrt = (number) => {
  if (number == 0 || number == 1) return number
  let left = 1,
    right = number,
    ans
  while (left <= right) {
    let mid = parseInt((left + right) / 2)
    let middle = mid * mid
    if (middle == number) return mid
    if (middle < number) {
      left = mid - 1
      ans = mid
    } else {
      right = mid + 1
    }
    ans = mid
  }
  return ans
}
console.log(binarySqrt(25))

//find the Sqrt of floating number
const binarySqrt1 = (number) => {
  if (number == 0 || number == 1) return number
  let float = 0.1
  let upper = number
  let lower = 0
  let mid
  while (upper - lower > float) {
    mid = (upper + lower) / 2
    let middle = mid * mid
    //if (middle == number) return mid
    if (middle < number) lower = mid
    else upper = mid
  }
  return mid
}
console.log(binarySqrt1(25.785))
