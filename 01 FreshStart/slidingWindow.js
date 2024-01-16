// let arry = [3, 2, 1, 7, 4, 1, 1, 2, 5]
// let k = 8
// let left = 0,
//   curr = 0,
//   ans = 0
// for (let right = 0; right < arry.length; right++) {
//   curr += arry[right]
//   while (curr > k) {
//     curr -= arry[left]
//     left++
//   }
//   ans = Math.max(ans, right - left + 1)
// }
// console.log(ans)

let arry2 = `1101100011`
let left = 0,
  currZeros = 0,
  ans = 0
for (let right = 0; right < arry2.length; right++) {
  if (arry2[right] == `0`) currZeros++
  while (currZeros > 1) {
    if (arry2[left] == `0`) currZeros--
    left++
  }
  ans = Math.max(ans, right - left + 1)
  console.log(ans)
}
console.log({ ans: ans })
