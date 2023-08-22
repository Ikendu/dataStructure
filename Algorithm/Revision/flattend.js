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

//another way
const arrFlat1 = (arr) => {
  return arr
    .toString()
    .replace(",,", ",")
    .split(",")
    .map((val) => {
      if (val == "[object Object]") return {};
      else if (isNaN(val)) return val;
      else return parseInt(val);
    });
};
console.log(arrFlat1([1, [2], {}, [], [3, [[4]]]]));
