const countSort = (array) => {
  let hash = {}
  let sorted = []

  for (let i = 0; i < array.length; i++) {
    if (!hash[array[i]]) hash[array[i]] = 1
    else hash[array[i]]++
  }
  console.log(hash)
  for (let key in hash) {
    for (let i = 0; i < hash[key]; i++) {
      sorted.push(parseInt(key))
    }
  }
  console.log(hash)
  return sorted
}
console.log(countSort([3, 5, 1, 2, 10, 3, 1, 20, 3, 2, 20, 12, 7, 0, 4]))
