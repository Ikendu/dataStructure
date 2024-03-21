const merge = (leftA, rightA) => {
  let left = 0;
  let right = 0;
  let result = [];
  while (left < leftA.length && right < rightA.length) {
    if (leftA[left] < rightA[right]) {
      result.push(leftA[left]);
      left++;
    } else {
      result.push(rightA[right]);
      right++;
    }
  }
  let leftRm = leftA.slice(left);
  let rightRm = rightA.slice(right);

  return result.concat(leftRm).concat(rightRm);
};

const mergeSort = (array) => {
  if (array.length < 2) return array;

  let mid = Math.floor(array.length / 2);
  let left = array.slice(0, mid);
  let right = array.slice(mid);
  let sorted;

  sorted = merge(mergeSort(left), mergeSort(right));

  return sorted;
};

function array(num) {
  let result = [];
  for (let i = 0; i < num; i++) {
    result.push(Math.floor(Math.random() * num + 1));
  }
  return result;
}
console.log(mergeSort(array(3000000)));

//redoing the merge sort

function merge2(rightA, leftA) {
  let left = 0;
  let right = 0;
  let result = [];

  while (left < leftA.length && right < rightA.length) {
    if (leftA[left] < rightA[right]) result.push(leftA[left++]);
    else result.push(rightA[right++]);
  }
  let leftRm = leftA.slice(left);
  let rightRm = rightA.slice(right);
  result.concat(leftRm).concat(rightRm);
}
