const highestNum = (arr) => {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let largerNum = arr[i][0];
    for (let j = 1; j < arr[i].length; j++) {
      if (largerNum < arr[i][j]) {
        largerNum = arr[i][j];
      }
    }
    console.log(largerNum);
    result[i] = largerNum;
  }
  return result;
};
console.log(
  highestNum([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1],
  ])
);
//using map method
const getLagerNums = (arr) => {
  return arr.map((group) =>
    group.reduce((prev, curr) => (prev > curr ? prev : curr))
  );
};
console.log(
  getLagerNums([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1],
  ])
);
