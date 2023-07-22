const arrAdd = (arr, items) => {
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

console.log(
  htmlColorNames([
    "DarkGoldenRod",
    "WhiteSmoke",
    "LavenderBlush",
    "PaleTurquoise",
    "FireBrick",
  ])
);
