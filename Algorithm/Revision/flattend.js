const arrFlat = (arr) => {
  let flatted = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flatted.push(...arrFlat(arr[i]));
    } else {
      flatted.push(arr[i]);
    }
  }
  return flatted;
};
console.log(arrFlat([1, [2], {}, [], [3, [[4]]]]));
