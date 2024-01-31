const binarySearch = (array, n) => {
  array = array.sort((a, b) => a - b)
  console.log(array)
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
