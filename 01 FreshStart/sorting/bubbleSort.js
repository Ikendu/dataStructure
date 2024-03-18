let myArray = [];
const swap = (arr, index1, index2) => {
  let temp = arr[index2];
  arr[index2] = arr[index1];
  arr[index1] = temp;
  return arr;
};

const randomNum = (arr, num) => {
  for (let i = 0; i < num; i++) {
    arr[i] = Math.floor(Math.random() * num + 1);
  }
  return arr;
};

const showItems = (arr) => {
  let len = arr.length;
  let string = "";
  for (let i = 0; i < len; i++) {
    string += arr[i] += " ";
    if ((i + 1) % 10 == 0) {
      string += "\n";
    }
  }
  console.log(string);
  return string;
};
const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
};

let abc = randomNum(myArray, 40);

// showItems(abc);
console.log(bubbleSort(abc));
