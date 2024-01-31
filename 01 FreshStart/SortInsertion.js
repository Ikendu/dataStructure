const insertionSort = (array) => {
  let j = null
  for (let i = 0; i < array.length; i++) {
    let value = array[i]
    for (j = i - 1; j > -i && array[j] > value; j--) {
      array[j + 1] = array[j]
    }
    array[j + 1] = value
  }
  return array
}
console.log(insertionSort([10, 4, 5, 100, 90, 40, 20, 8]))
