const rotate = (arr, k) => {
  let newArr = [];
  let temp = [];

  if (k < 0) {
    return arr;
  }

  for (let i = 0; i < arr.length - k; i++) {
    newArr.push(arr[i]);
  }
  //console.log(newArr);
  for (let i = arr.length - 1; i >= arr.length - k; i--) {
    newArr.unshift(arr[i]);
  }
  //console.log(temp);
  // for (let i = 0; i < temp.length; i++) {
  //   newArr.unshift(temp[i]);
  // }
  return newArr;
};
console.log(rotate([-1, -100, 3, 99], 2));
//console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));
