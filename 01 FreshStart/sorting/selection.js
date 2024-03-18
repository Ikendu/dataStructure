const swap = (arr, a, b) => {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
};

const random = (nums) => {
  let myArray = [];
  for (let i = 0; i < nums; i++) {
    myArray[i] = Math.floor(Math.random() * nums + 1);
  }
  console.log(myArray);
  return myArray;
};

const selection = (arr) => {
  let min;
  for (let i = 0; i < arr.length - 1; i++) {
    min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    swap(arr, i, min);
  }
  console.log(arr);
  return arr;
};

let myArray = random(20);
selection(myArray);
