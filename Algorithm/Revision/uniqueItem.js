//using concat
const getUnique = (arr1, arr2) => {
  return arr1
    .filter((ele) => arr2.indexOf(ele) < 0)
    .concat(arr2.filter((ele) => arr1.indexOf(ele) < 0));
};
console.log(getUnique([1, "calf", 3, "piglet"], [1, "calf", 3, 4]));

//using spread
const getUnique1 = (arr1, arr2) => {
  let newArr = [...arr1, ...arr2];
  return newArr.filter(
    (item) => arr1.indexOf(item) < 0 || arr2.indexOf(item) < 0
  );
};
console.log(getUnique1([1, "calf", 3, "piglet"], [1, "calf", 3, 4]));

//using for-loop, delete, Boolean and if statment
const getUnique2 = (arr1, arr2) => {
  let newArr = [];

  arr1.sort((a, b) => (a == b ? 0 : a > b ? 1 : -1));
  arr2.sort((a, b) => (a == b ? 0 : a > b ? 1 : -1));

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        delete arr1[i];
        delete arr2[j];
      }
    }
  }

  return arr1.filter(Boolean).concat(arr2.filter(Boolean));
};
console.log(getUnique2([1, "calf", 3, "piglet", 5, 6], [1, "calf", 3, 4]));
