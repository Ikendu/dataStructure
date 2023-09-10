//return the number of summed birthdays in m blocks
function birthday(s, d, m) {
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    let sum = s.slice(i, i + m).reduce((a, b) => a + b);
    if (sum === d) result++;
  }
  return result;
  //not working well solution
  //   for (let i = 0; i < s.length; i++) {
  //     let sum = 0;
  //     let count = 0;
  //     while (count <= m) {
  //       sum = s[i] + s[i + 1];
  //       count++;
  //     }
  //     getter.push(sum);
  //   }
  //   return getter.filter((item) => item === d).length;
}
console.log(birthday([1, 2, 1, 3, 2], 3, 2));
