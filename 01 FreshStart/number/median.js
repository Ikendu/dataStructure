//median is the sum of the two middle number if even or the middle number is odd in a sorted array

function median(array) {
  array = array.sort((a, b) => a - b);
  console.log(array);
  //if array length is odd
  let length = array.length;
  if (length % 2 !== 0) return array[Math.floor(length / 2)];
  else return (array[length / 2] + array[length / 2 - 1]) / 2;
}

console.log(median([3, 1, 2, 5, 6, 2, 4, 10]));
