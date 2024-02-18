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

//using some()method
const arrFlat = (arr) => {
  let newArr = [].concat(...arr);

  return newArr.some(Array.isArray) ? arrFlat(newArr) : newArr;
};
console.log(arrFlat([1, [2], [3, [[4]]]]));

//using forEach method
const flatDimen = (arr, newArr = []) => {
  arr.forEach((item) =>
    Array.isArray(item) ? flatDimen(item, newArr) : newArr.push(item)
  );
  return newArr;
};
console.log(flatDimen([1, [2], [3, [[4]]]]));
