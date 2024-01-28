let arr = [7, 4, 2, 3, 5, 7, 9, 10, 1]

const selectionSort = (array) => {
  let min = null
  for (let i = 0; i < array.length; i++) {
    min = i
    for (let j = i + 1; j < array.length; j++) {
      if (array[min] > array[j]) {
        min = j
      }
    }
    if (min != i) {
      swap(array, min, i)
    }
  }
  return array
}

const swap = (arr, i, j) => {
  let temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

console.log(selectionSort(arr))
