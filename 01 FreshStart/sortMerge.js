//testing array mutation

// let arr = [2, 4, 5, 6, 3, 2, 7]
// let newArr = []
// let newArr1 = []
// for (let i = arr.length - 1; i >= 0; i--) {
//newArr.push(arr[i])
//   newArr1.push(arr.pop(arr[i]))
// }
// console.log(arr)
// console.log(newArr)
// console.log(newArr1)

//merge algorithm
const merge = (leftA, rightA) => {
  let left = 0,
    right = 0
  let resultA = []

  while (left < leftA.length && right < rightA.length) {
    if (leftA[left] < rightA[right]) {
      resultA.push(leftA[left++])
      //left++
    } else {
      resultA.push(rightA[right++])
      //right++
    }
  }
  let remainsLeft = leftA.slice(left)
  let remainsRight = rightA.slice(right)

  return resultA.concat(remainsLeft).concat(remainsRight)
}

//Merge sort
const mergeSort = (array) => {
  if (array.length < 2) return array

  let mid = Math.floor(array.length / 2)
  let leftA = array.slice(0, mid)
  let rightA = array.slice(mid)

  return merge(mergeSort(leftA), mergeSort(rightA))
}

console.log(mergeSort([3, 5, 1, 55, 90, 10, 4, 6, 5]))
