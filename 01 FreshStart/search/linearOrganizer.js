function find(data, arr) {
  let item;
  let newArr = [];
  for (let i in arr) {
    if (arr[i] == data) {
      item = arr.splice(i, 1);
      newArr = newArr.concat(item).concat(arr);
      console.log(newArr);
      return "Data found";
    }
  }
}
find(10, [40, 30, 9, 8, 11, 10, 60, 33]);

//progressive organizer
const movingUpData = (data, array) => {
  for (let i in array) {
    if (array[i] == data) {
      swap(array, i, i - 1);
      console.log(`found at index ${i}`);
      return array;
    }
  }
};

const swap = (arr, i, j) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  return arr;
};

console.log(movingUpData(50, [10, 20, 5, 30, 40, 50, 35, 40, 25]));
