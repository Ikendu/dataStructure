//using object.values
function delentry(arr) {
  let args = Object.values(arguments).slice(1);

  return arr.filter((item) => !args.includes(item));
}
console.log(delentry([1, 2, 3, 1, 2, 5, 3], 2, 3));

//using array.from
function delentry1(arr) {
  let args = Array.from(arguments).slice(1);

  return arr.filter((item) => !args.includes(item));
}
console.log(delentry1([1, 2, 3, 1, 2, 3], 2, 3));

//using spread arguments
const delentry2 = (arr, ...args) => {
  return arr.filter((item) => !args.includes(item));
};
console.log(delentry2([1, 2, 3, 1, 6, 3], 2, 3));
