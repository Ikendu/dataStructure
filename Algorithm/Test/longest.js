//return the length of the longest subset whose difference of any two elements
// is less than or equal to one
const pickingNum = (arr) => {
  a = [...new Set(arr)];
  let counter = [];
  let max = [];

  for (let i of a) {
    for (let j of arr) {
      if (i - j == 1 || i == j) counter++;
    }
    max = max < counter ? counter : max;
    counter = 0;
  }
  return max;
};
console.log(pickingNum([1, 2, 2, 3, 1, 2]));
