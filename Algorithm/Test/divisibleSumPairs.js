const divisibleSumPairs = (n, k, ar) => {
  let count = 0;
  let getter = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if ((ar[i] + ar[j]) % k == 0 && i < j) {
        getter.push([i, j]);
        count++;
      }
    }
  }
  console.log(getter);
  return count;
};
console.log(divisibleSumPairs(6, 5, [1, 2, 3, 4, 5, 6]));
