//1, using sort and for loop
const getIndexToIns = (arr, num) => {
  arr.sort((a, b) => a - b);

  for (i = 0; i < arr.length; i++) {
    if (arr[i] >= num) {
      return i;
    }
  }
  return arr.length;
};
console.log(getIndexToIns([2, 5, 10], 15));

//2, using filter and length methods

const insertAtIndex = (arr, num) => {
  return arr.filter((val) => num > val).length;
};
console.log(insertAtIndex([2, 5, 10], 15));

//3, using concate, sort and indexOf

const insertInIndex = (arr, num) => {
  return arr
    .concat(num)
    .sort((a, b) => a - b)
    .indexOf(num);
};
console.log(insertInIndex([2, 5, 10], 15));

//4, using findIndex and ternary operator
const insertItem = (arr, num) => {
  let index = arr.sort((a, b) => a - b).findIndex((val) => val >= num);
  return index === -1 ? arr.length : index;
};
console.log(insertItem([2, 5, 10], 15));
