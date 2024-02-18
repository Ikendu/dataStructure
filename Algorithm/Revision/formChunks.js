//divide arr in n sizes and store them as a two dimensional array
const modify = (arr, n) => {
  let newArr = [];

  for (let i = 0; i < arr.length; i += n) {
    newArr.push(arr.slice(i, i + n));
  }
  return newArr;
};
console.log(modify([0, 1, 2, 3, 4, 5], 2));

//using the while-loop
const modify1 = (arr, n) => {
  let newArr = [];
  while (arr.length > 0) {
    newArr.push(arr.splice(0, n));
  }
  return newArr;
};
console.log(modify1([0, 1, 2, 3, 4, 5], 2));
