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

let k = 4
let nums = [3, -1, 4, 12, -8, 5, 6]
let curr = 0

for (let i = 0; i < k; i++) {
  curr += nums[i]
}
let ans = curr
for (let j = k; j < nums.length; j++) {
  curr += nums[j] - nums[j - k]
  ans = Math.max(ans, curr)
}
console.log(ans)
