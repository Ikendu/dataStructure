//find the first element that passes the test of the function
const finders = (arr, func) => {
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i]) == true) {
      return arr[i];
    }
  }
};
console.log(
  finders([1, 4, 5, 9], (num) => {
    return num % 2 === 0;
  })
);

//using find method
const finder = (arr, func) => {
  return arr.find(func);
};
console.log(
  finder([1, 4, 5, 9], (num) => {
    return num % 2 === 0;
  })
);
