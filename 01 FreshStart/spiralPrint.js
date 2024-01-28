//print the elements of a multidimensional array

const spiralPrint = (multi) => {
  let toprow = 0
  let btmrow = multi.length - 1
  let leftcol = 0
  let rightcol = multi[0].length - 1

  while (toprow < btmrow && leftcol < rightcol) {
    for (let col = 0; col <= rightcol; col++) {
      console.log(multi[toprow][col])
    }
    toprow++
    for (let row = toprow; row <= btmrow; row++) {
      console.log(multi[row][rightcol])
    }
    rightcol--
    if (toprow <= btmrow) {
      for (let col = rightcol; col >= 0; col--) {
        console.log(multi[btmrow[col]])
      }
      btmrow--
    }
    if (leftcol <= rightcol) {
      for (let row = btmrow; row > toprow; row--) {
        console.log(multi[row][leftcol])
      }
      leftcol++
    }
  }
}
console.log([[1, 2, 3, 4, 5], [(6, 7, 8, 9, 10)], [(11, 12, 13, 14, 15)], [(16, 17, 18, 19, 20)]])
