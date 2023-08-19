//return the square of positive integers
const squareList = (arr) => {
  return arr
    .filter((num) => num > 0 && parseInt(num) / num === 1)
    .map((num) => num * num);
};
console.log(squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]));

//using modules
const squareList1 = (arr) => {
  return arr
    .filter((num) => num > 0 && parseInt(num) % num === 0)
    .map((num) => Math.pow(num, 2));
};
console.log(squareList1([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]));

//using the reduce method
const squareList2 = (arr) => {
  return arr.reduce((squareNum, num) => {
    return num > 0 && Number.isInteger(num)
      ? squareNum.concat(num * num)
      : squareNum;
  }, []);
};
console.log(squareList2([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]));
