const innerReverse = (i, j, k) => {
  let arr = [];
  let result = 0;
  for (let a = i; a <= j; a++) {
    let ans = Math.abs(Number(String(a).split("").reverse().join("")) - a) / k;
    arr.push(ans);
    if (parseInt(ans) / ans === 1 || ans === 0) result++;
  }
  console.log(arr);
  return result;
};
console.log(innerReverse(20, 23, 6));
