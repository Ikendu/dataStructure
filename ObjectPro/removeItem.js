//check is an item is contained in a sub-array, if yes exclude the arr containing it
//and return the rest of the arr

const excluder = (arr, elem) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].indexOf(elem) !== -1) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};
console.log(
  excluder(
    [
      [7, 2, 9],
      [1, 6, 3],
      [3, 13, 26],
      [19, 9, 9],
    ],
    3
  )
);
