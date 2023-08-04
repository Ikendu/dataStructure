function getSet(arr) {
  let newArr = [];

  for (let i = 0; i < arguments.length; i++) {
    for (let j = 0; j < arguments[i].length; j++) {
      if (newArr.indexOf(arguments[i][j]) < 0) {
        newArr.push(arguments[i][j]);
      }
    }
  }
  return newArr;
}
console.log(getSet([1, 3, 2], [5, 2, 1, 4], [2, 1]));

//using spread
function uniqueSet(...arr) {
  return [...new Set(arr.flat())];
}
console.log(uniqueSet([1, 3, 2], [5, 2, 1, 4], [2, 1]));

//using filter
function getUnique() {
  return [...arguments]
    .flat()
    .filter((item, index, arr) => arr.indexOf(item) === index);
}
console.log(getUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
