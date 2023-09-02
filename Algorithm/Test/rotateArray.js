const rotate = (arr, k) => {
  let newArr = [];
  newArr = arr.splice(arr.length - k);
  newArr = newArr.concat(arr.splice(0));
  return newArr;
};
console.log(rotate([-1, -100, 3, 99], 2));
console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));
