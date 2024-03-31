const binary = (arr, data) => {
  arr = arr.sort((a, b) => a - b);
  console.log(arr);
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((right + left) / 2);

    if (data < arr[mid]) {
      right = mid - 1;
    } else if (data > arr[mid]) {
      left = mid + 1;
    } else if (data == arr[mid]) {
      return `${data} found at index ${mid}`;
    }
  }
  return `${data} not found`;
};

let nums = [20, 10, 30, 70, 50, 30, 40, 100, 15];
console.log(binary(nums, 40));

function binarys(array, item) {
  array = array.sort((a, b) => a - b);
  if (array.length < 1) return false;
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    if (item === array[middle]) {
      return true;
    } else if (item < array[middle]) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }
  return false;
}

console.log(`Second search`);
console.log(binarys([6, 3, 2, 4, 5, 10, 14], 3));
