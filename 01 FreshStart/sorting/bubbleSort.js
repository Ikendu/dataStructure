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
    string += arr[i];
    string += " ";
    if (i % 10 == 0) {
      string += "\n";
    }
  }
  console.log(string);
  return string;
};

let abc = randomNum(myArray, 20);
showItems(abc);
