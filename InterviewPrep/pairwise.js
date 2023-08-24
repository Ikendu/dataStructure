//Given an array arr, find element pairs whose sum equal the
//second argument arg and return the sum of their indices.

const pairs = (arr, arg) => {
  let pairs = [];
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === arg && !pairs.includes(i) && !pairs.includes(j)) {
        pairs.push(i, j);
      }
    }
  }
  return pairs.reduce((sum, item) => sum + item, 0);
  //OR sum all using for -loop
  //   for (let i in pairs) {
  //     result += pairs[i];
  //   }
  //   return result;
};
console.log(pairs([1, 4, 2, 3, 0, 5], 7));
