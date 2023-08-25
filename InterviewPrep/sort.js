//sort array list from the list to the most using bubble sort
const bubbleSort = (arr, arg) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let temp;
      if (arr[i] > arr[j]) {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
};
console.log(
  bubbleSort([
    1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92,
  ])
);
