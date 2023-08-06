const flatten = (arr) => {
  let flatArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      //check if there is more arr dimensions
      flatArr.push(...flatten(arr[i]));
    } else {
      flatArr.push(arr[i]);
    }
  }
  return flatArr;
};
console.log(flatten([1, [2], [3, [[4]]]]));
