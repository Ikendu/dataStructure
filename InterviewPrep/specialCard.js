//[5,3,9,9,8,3,5]
const specialCard = (arr) => {
  let value = new Set();
  let newArr = [];

  arr.map((item) => {
    if (value.has(item)) {
      value.delete(item);
    } else {
      value.add(item);
    }
  });
  console.log(Array.from(value));
  for (let i of value) {
    newArr.push(i);
  }
  return newArr;
};
console.log(specialCard([5, 3, 9, 9, 8, 3, 5]));
