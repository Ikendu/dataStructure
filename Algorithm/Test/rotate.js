const rotate = (arr, k) => {
  let newArr = [];
  let temp = [];

  if (k < 0) {
    return arr;
  }

  for (let i = 0; i < arr.length - k; i++) {
    newArr.push(arr[i]);
  }
  for (let i = arr.length - k; i < arr.length; i++) {
    temp.unshift(arr[i]);
  }
  for (let i = 0; i < temp.length; i++) {
    newArr.unshift(temp[i]);
  }
  console.log(newArr);
};
rotate([-1, -100, 3, 99], 2);
