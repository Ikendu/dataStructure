let array1 = [1, 2, 3, 4, 5]
const arr1 = Array.from(array1) //creates  a new array
arr1.slice(2, 4) //copy from index 2 to index 3
arr1.splice(2, 4, 10, 20, 30) //cut from 2 and take only 4 items (and add 10, 20, 30, in the original array)

//using spread
const addAll = (a, b, c, d) => {
  return a + b + c + d
}
console.log(addAll(...array1))
console.log(Math.max(...array1))

const findTwoNums = (wieght, arr) => {
  let hashTable = {}

  for (let i = 0; i < arr.length; i++) {
    let curr = arr[i]
    let difference = wieght - curr
    if (hashTable[curr] !== undefined) {
      return [i, hashTable[wieght - curr]]
    } else {
      hashTable[difference] = i
    }
  }
  return -1
}
console.log(findTwoNums(9, array1))

//find the median of an array
const median = (array) => {
  let len = array.length
  let mid = -1

  //checking if Odd
  if (len % 2 === 1) {
    mid = array[Math.floor([len / 2])]
  }

  //check if Even
  if (len % 2 === 0) {
    mid = (array[len / 2] + array[len / 2 - 1]) / 2
  }
  return mid
}

console.log({ median: median([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]) })
