function rotateLeft(d, arr) {
  let newA = [];
  if (arr.length < 1) return 0;
  newA = newA.concat(arr.splice(0, d));
  //newA.unshift(arr.splice(0));
  for (let i = arr.length - 1; i >= 0; i--) {
    newA.splice(0, 0, arr[i]);
  }
  return newA; //.join(",").split(",");
}
console.log(
  rotateLeft(
    10,
    [
      41, 73, 89, 7, 10, 1, 59, 58, 84, 77, 77, 97, 58, 1, 86, 58, 26, 10, 86,
      51,
    ]
  )
);
