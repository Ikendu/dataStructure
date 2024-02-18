//using for-loop iteration
const findObj = (arr, obj) => {
  let newArr = [];

  for (let i in arr) {
    let matched = false;
    for (let j in obj) {
      if (arr[i][j] !== obj[j]) matched = true;
    }
    if (!matched) newArr.push("hello");
  }
  return newArr;
};
console.log(
  findObj([{ apple: 1, bat: 2 }, { bat: 2 }, { apple: 1, bat: 2, cookie: 2 }], {
    apple: 1,
    bat: 2,
  })
);

//using filter and for-loop
const findObj2 = (arr, obj) => {
  let objKeys = Object.keys(obj);

  return arr.filter((item) => {
    for (let i in objKeys) {
      if (item[objKeys[i]] !== obj[objKeys[i]]) return false;
    }
    return true;
  });
};
console.log(
  findObj2(
    [{ apple: 1, bat: 2 }, { bat: 2 }, { apple: 1, bat: 2, cookie: 2 }],
    {
      apple: 1,
      bat: 2,
    }
  )
);

//using .filter and .every
const findObj1 = (arr, obj) => {
  let objKeys = Object.keys(obj);

  return arr.filter((item) => objKeys.every((ele) => item[ele] === obj[ele]));
};
console.log(
  findObj1(
    [{ apple: 1, bat: 2 }, { bat: 2 }, { apple: 1, bat: 2, cookie: 2 }],
    {
      apple: 1,
      bat: 2,
    }
  )
);
