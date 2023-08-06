const funcDeal = (arr, func) => {
  while (arr.length > 0 && !func(arr[0])) {
    arr.shift();
  }
  return arr;
};
console.log(
  funcDeal([4, 2, 1, 5], (n) => {
    return n < 2;
  })
);
