//return the lowest type of the most frequent item in the array

function migratoryBirds(arr) {
  let max = 0;
  let item = 0;
  arr = arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = 1; j < arr.length; j++) {
      if (arr[i] == arr[j]) count++;
    }
    if (count > max) {
      max = count;
      item = arr[i];
    }
  }
  return item;
}
console.log(migratoryBirds([1, 4, 4, 4, 5, 3]));
