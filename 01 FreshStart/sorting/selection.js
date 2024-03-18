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
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        j++;
      }
    }
    arr[i] = arr[j];
  }
  return arr;
};

random(20);
