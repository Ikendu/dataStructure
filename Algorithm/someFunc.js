//function to check if an argument will work in a given function

const checkFuncEle = (arr, func) => {
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      return arr[i];
    }
  }
};
console.log(checkFuncEle([1, 8, 3, 4], (num) => num % 2 === 0));

//chack if an entry is a boolean value
const checkBoolean = (bool) => {
  if (bool === true || bool === false) {
    return true;
  }
  return false;
};
//using typeof
const boolChecker = (bool) => {
  return typeof bool === "boolean";
};
console.log(boolChecker(false));
