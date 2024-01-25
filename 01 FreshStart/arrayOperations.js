let array1 = [1, 2, 3, 4, 5]
const arr1 = Array.from(array1) //creates  a new array
arr1.slice(2, 4) //copy from index 2 to index 3
arr1.splice(2, 4, 10, 20, 30) //cut from 2 and take only 4 items (and add 10, 20, 30, in the original array)

//spread
const addAll = (a, b, c, d) => {
  return a + b + c + d
}
console.log(addAll(...array1))
