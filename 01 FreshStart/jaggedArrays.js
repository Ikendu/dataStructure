//a jagged array is a multi-dimensional array in javascript

//helper function to produce a jagged (multidimensional) array
const multidimensional = (row, column) => {
  let jagged = new Array(row)
  for (let i = 0; i < column; i++) {
    jagged[i] = new Array(row)
  }
  return jagged
}

console.log(multidimensional(3, 3))
