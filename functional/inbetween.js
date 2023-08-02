//add all the nums inbetween two numbers in an array
const addAll = (arr) => {
  let min = Math.min.apply(null, arr);
  let max = Math.max.apply(null, arr);
  let added = 0;

  for (let i = min; i <= max; i++) {
    added += i;
  }
  return added;
};
console.log(addAll([2, 9]));

//using spread
const addAllNum = (arr) => {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let added = 0;

  for (let i = min; i <= max; i++) {
    added += i;
  }
  return added;
};
console.log(addAllNum([2, 4, 8, 3, 90]));
