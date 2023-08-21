//using arguments method
function unique(arr) {
  let newArr = [];

  for (let groups of arguments) {
    for (let ele of groups) {
      if (!newArr.includes(ele)) {
        newArr.push(ele);
      }
    }
  }
  return newArr;
}
console.log(unique([1, 3, 2], [5, 2, 1, 4], [2, 1]));

//using spread
const unique1 = (...arr) => {
  let newArr = [];

  for (let i in arr) {
    for (let j in arr[i]) {
      if (newArr.indexOf(arr[i][j]) < 0) {
        newArr.push(arr[i][j]);
      }
    }
  }
  return newArr;
};
console.log(unique1([1, 3, 2], [5, 2, 1, 4], [2, 1]));
