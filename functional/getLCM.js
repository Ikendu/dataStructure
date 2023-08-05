const getLcm = (arr) => {
  //let max = Math.max(...arr);
  //let min = Math.min(...arr);
  let [min, max] = arr.sort((a, b) => a - b);
  let itemSum = max - min + 1;
  let upper = 1;

  for (let i = min; i <= max; i++) {
    upper *= i;
  }

  for (let multiple = max; multiple < upper; multiple++) {
    let counter = 0;
    for (let i = min; i <= max; i++) {
      if (multiple % i === 0) {
        counter += 1;
      }
      if (itemSum === counter) {
        return multiple;
      }
    }
  }
};
console.log(getLcm([23, 18]));
