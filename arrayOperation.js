/* const arrAdd = (arr, items) => {
  arr.unshift(items);
  arr.push(items);
  return arr;
};
const remove = (arr) => {
  let pushed = arr.shift();
  let popped = arr.pop();

  console.log(pushed, popped, arr);
};
const myArr = ["hello", "success", "come", "here"];
let things = "welcome";

// console.log(myArr);
// arrAdd(myArr, things);
// console.log(myArr);
remove(myArr);

function htmlColorNames(arr) {
  arr.splice(0, 2, "DarkSalmon", "BlanchedAlmond");
  return arr;
}
color = [
  "DarkGoldenRod",
  "WhiteSmoke",
  "LavenderBlush",
  "PaleTurquoise",
  "FireBrick",
];
console.log(htmlColorNames(color));

const myArr = ["hello", "success", "come", "here"];
// myArr.slice(1, 3); //cut off from 2nd index
myArr.splice(2, 3, "will", "locate", "you"); 

function copyArry(arr, multiple) {
  let newArr = [];
  while (multiple >= 1) {
    newArr.push([...arr]);
    multiple--;
  }
  console.log(newArr);
}
copyArry(myArr, 4);
*/

//using indexOf to filter off items or arrays
const filtered = (arr, elem) => {
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].indexOf(elem) < 0) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};
console.log(
  filtered(
    [
      [3, 2, 3],
      [1, 6, 3],
      [3, 13, 26],
      [19, 3, 9],
    ],
    3
  )
);
