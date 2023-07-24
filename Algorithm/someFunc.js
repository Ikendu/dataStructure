//function to check if an argument will work in a given function

const checkFuncEle = (arr, func) => {
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      return arr[i];
    }
  }
};
console.log(checkFuncEle([1, 8, 3, 4], (num) => num % 2 === 0));
