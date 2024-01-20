// let k = 100
// let array = [10, 5, 2, 6]

// let left = 0
// let curr = 1
// let ans = 0

// for (let right = 0; right < array.length; right++) {
//   curr *= array[right]
//   while (curr >= k) {
//     curr /= array[left]
//     left++
//   }
//   ans += right - left + 1
// }
// console.log(ans)

//Example 4: Given an integer array nums and an integer k, find the sum of the subarray with the
//largest sum whose length is k

// let k = 4
// let nums = [3, -1, 4, 12, -8, 5, 6]
// let curr = 0

// for (let i = 0; i < k; i++) {
//   curr += nums[i]
// }
// let ans = curr
// for (let j = k; j < nums.length; j++) {
//   curr += nums[j] - nums[j - k]
//   ans = Math.max(ans, curr)
// }
// console.log(ans)

// unfinished
// let array = [-3, 0, 1, 2, -1, 1, -2]
// let sorted = array.sort((a, b) => a - b)
// console.log(sorted)
// let curr = 0
// let ans = 0
// let left = 0
// for (let i = 0; i < array.length; i++) {
//   let curr = sorted[i]
//   let right = sorted.length-1
//   while(){}
// }
// console.log(ans)

//EDUDREAMS
//dynamic programming~~~memorization~~cacheing

// const addTo80 = (n) => {
//   console.log(`adding to 80...`)
//   console.log(n + 80)
// }
// const memorized = () => {
//   let chache = {}
//   return function (n) {
//     if (n in chache) {
//       return chache[n]
//     } else {
//       console.log(`long time work`)
//       chache[n] = n + 80
//       return chache[n]
//     }
//   }
// }

// const memorize = memorized()
// console.log(memorize(5))
// console.log(memorize(5))
// console.log(memorize(5))
// console.log(memorize(7))

let calc = 0
const fibonacci = (n) => {
  calc++
  if (n < 2) {
    return n
  }

  return fibonacci(n - 1) + fibonacci(n - 2)
}

console.log(`fib`, fibonacci(10))
console.log(calc)

let memorizedFib = () => {
  let cached = {}
  return (n) => {
    if (cached[n]) {
      return cached[n]
    } else {
      if (n < 2) {
        return n
      } else {
        return cached[fibonacci[n - 2] + fibonacci[n - 1]]
      }
    }
  }
}
let memfib = memorizedFib()
console.log(memfib(10))
