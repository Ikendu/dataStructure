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
