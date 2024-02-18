//insert at a sorted position and return the index
const insert = (arr, num) => {
  arr.push(num);
  arr.sort((a, b) => a - b);
  return arr.indexOf(num);
};
console.log(insert([100, 40, 10, 60], 50));

//using filter
const insert1 = (arr, num) => {
  return arr.filter((curr) => num >= curr).length;
};
console.log(insert1([100, 40, 10, 60], 50));

//using normal for-loop and counter
const insert2 = (arr, num) => {
  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= num) {
      counter++;
    }
  }
  return counter;
};
console.log(insert2([100, 40, 10, 60], 50));
