//using the spread method
const copyArry = (arr1, arr2, n) => {
  return [...arr2.slice(0, n), ...arr1, ...arr2.slice(n)];
};

console.log(copyArry([2, 3, 4, 5], [1, 2, 3], 2));

//using splice and slice methods
const copyArr = (arr1, arr2, n) => {
  let newArr = arr2.slice();
  for (let i = 0; i < arr1.length; i++) {
    newArr.splice(n, 0, arr1[i]);
    n++;
  }
  return newArr;
};
console.log(copyArr([2, 3, 4, 5], [1, 2, 3], 2));

//using combined spread
const combineArr = (arr1, arr2, n) => {
  let newArr = arr2.slice();
  newArr.splice(n, 0, ...arr1);

  return newArr;
};
console.log(combineArr([2, 3, 4, 5], [1, 2, 3], 2));
