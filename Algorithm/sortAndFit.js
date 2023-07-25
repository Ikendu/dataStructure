//using sort and for loop
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

//using filter and length method

const insertAtIndex = (arr, num) => {
  return arr.filter((val) => num > val).length;
};
console.log(insertAtIndex([2, 5, 10], 15));
