const truthy = (arr) => {
  let newArr = [...arr];
  let result = [];

  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i]) {
      result.push(newArr[i]);
    }
  }
  return result;
};
console.log(
  truthy([false, null, 0, NaN, undefined, "", 7, "ate", "", false, 9])
);
//if(Boolean(newArr[i]) == true) will work
const truthy1 = (arr) => {
  return arr(Boolean);
};
console.log(
  truthy1([false, null, 0, NaN, undefined, "", 7, "ate", "", false, 9])
);
