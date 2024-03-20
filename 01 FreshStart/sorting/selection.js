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
  // console.log(arr);
  return arr;
};

let myArray = random(100000);

//redoing other sorting algorithm for comparism
const bubble = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) swap(arr, j, i);
    }
  }
  // console.log(arr);
  return arr;
};
const insertion = (arr) => {
  let j, value;
  for (let i = 0; i < arr.length; i++) {
    value = arr[i];
    for (j = i - 1; j > -1 && arr[j] > value; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = value;
  }
  // console.log(arr);
  return arr;
};
// measureing the time difference in bubble, selection and insertion sorts
let startb = new Date().getTime();
bubble(myArray);
let endb = new Date().getTime();
let diff = endb - startb;
console.log("BUBBLE TIME DIFFERENCE", diff);

// let startSele = new Date().getTime();
// selection(myArray);
// let endSele = new Date().getTime();
// let diff1 = endSele - startSele;
// console.log("SELECTION TIME DIFFERENCE", diff1);

// let startIns = new Date().getTime();
// insertion(myArray);
// let endIns = new Date().getTime();
// let diff2 = endIns - startIns;
// console.log("INSERTION TIME DIFFERNCE", diff2);
