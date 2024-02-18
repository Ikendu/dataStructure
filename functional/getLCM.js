const getLcm = (arr) => {
  let [min, max] = arr.sort((a, b) => a - b);
  let totalNum = max - min + 1;
  let upperResult = 1;

  for (let i = min; i <= max; i++) {
    upperResult *= i;
  }
  for (let checker = max; checker <= upperResult; checker += max) {
    let counter = 0;

    for (let i = min; i <= max; i++) {
      if (checker % i === 0) {
        counter += 1;
      }
      if (counter === totalNum) {
        return checker;
      }
    }
  }
};
console.log(getLcm([1, 5]));
