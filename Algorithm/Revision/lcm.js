const lcm = (arr) => {
  let [min, max] = arr.sort((a, b) => a - b);
  let counted = max - min + 1;
  let maximum = 1;

  for (let i = min; i <= max; i++) {
    maximum *= i;
  }
  for (let j = max; j <= maximum; j += max) {
    let counter = 0;

    for (let k = min; k <= max; k++) {
      if (j % k === 0) counter++;
    }
    if (counter === counted) return j;
  }
};
console.log(lcm([1, 5]));
