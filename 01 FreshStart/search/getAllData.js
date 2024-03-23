//Searching algorithm
function binary(array, data) {
  array = array.sort((a, b) => a - b);
  console.log("Sorted array", array);
  let left = 0;
  let right = array.length - 1;
  let mid;
  let count = 0;

  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (data < array[mid]) {
      right = mid - 1;
    } else if (data > array[mid]) {
      left = mid + 1;
    } else if (data === array[mid]) {
      //other instance of data
      count++;
      for (let i = mid - 1; i > 0; i--) {
        if (array[i] == data) count++;
        else break;
      }
      for (let i = mid + 1; i < array.length; i++) {
        if (array[i] == data) count++;
        else break;
      }
      console.log(`${data} is found at index ${mid}`);
      console.log(`the number of ${data} is ${count}`);
      return mid;
    }
  }
  return -1;

  //   return `${data} not found`;
}
let nums = [10, 20, 18, 91, 15, 20, 14, 60, 84, 20, 20, 12, 20, 50, 20, 67, 20];
// console.log(binary(nums, 20));

//getting all other instance of searched data using function return

function getOthers(arr, data) {
  let pos = binary(arr, data);
  if (pos > -1) {
    let count = 1;
    for (let i = pos - 1; i > 0; i--) {
      if (arr[i] == data) count++;
      else break;
    }
    for (let i = pos + 1; i < arr.length; i++) {
      if (arr[i] == data) count++;
      else break;
    }
    return count;
  }
}

console.log(getOthers(nums, 20));
