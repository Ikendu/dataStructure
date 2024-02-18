//using while-loop, splice and push
const arrToGroup = (arr, size) => {
  let newArr = [];
  let i = 0;

  while (i < arr.length) {
    newArr.push(arr.slice(i, i + size));
    i += size;
  }
  return newArr;
};
console.log(arrToGroup([0, 1, 2, 3, 4, 5], 4));

//using for-loop, slice and push
const arrToGroups = (arr, size) => {
  let newArr = [];

  for (i = 0; i < arr.length; i += size) {
    newArr.push(arr.slice(i, i + size));
  }
  return newArr;
};
console.log(arrToGroups([0, 1, 2, 3, 4, 5], 2));

//using for-loop splice and push
const arrToGps = (arr, size) => {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr.splice(0, size));
  }
  return newArr;
};
console.log(arrToGps([0, 1, 2, 3, 4, 5], 4));
