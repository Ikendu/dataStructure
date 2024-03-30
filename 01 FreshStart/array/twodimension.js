function spiralPrint(M) {
  let toprow = 0;
  let leftcol = 0;
  let btmrow = M.length - 1;
  let rightcol = M[0].length - 1;

  while (toprow < btmrow && leftcol < rightcol) {
    for (let col = 0; col <= rightcol; col++) {
      console.log(M[toprow][col]); //initial toprow = 0
    }
    toprow++;
    for (let row = toprow; row <= btmrow; row++) {
      console.log(M[row][rightcol]);
    }
    rightcol--;
    if (toprow <= btmrow) {
      for (let col = rightcol; col >= 0; col--) {
        console.log(M[btmrow][col]);
      }
      btmrow--;
    }
    if (leftcol <= rightcol) {
      for (let row = btmrow; row > toprow; row--) {
        console.log(M[row][leftcol]);
      }
      leftcol++;
    }
  }
}

let array = [
  [20, 4, 6, 7, 33, 10, 17],
  [3, 40, 36, 17, 3, 1, 10],
  [12, 4, 6, 17, 13, 11, 7],
  [2, 41, 6, 16, 23, 11, 7],
  [2, 14, 26, 27, 23, 14, 7],
  [12, 4, 16, 7, 10, 16, 7],
];

console.log(spiralPrint(array));
