const binarySearch = (array, n) => {
  let startIdx = 0
  let lastIdx = array.length - 1

  while (startIdx <= lastIdx) {
    var midIdx = Math.floor((lastIdx + startIdx) / 2)

    if (array[midIdx] == n) return midIdx
    else if (n > array[midIdx]) {
      startIdx = midIdx
    } else {
      lastIdx = midIdx
    }
  }
  return -1
}

console.log(binarySearch([1, 2, 3, 4, 5, 6], 4))
