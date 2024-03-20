const merge = (rightA, leftA) => {
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
  if ((array, length < 2)) return array;

  let mid = Math.floor(array.length / 2);
  let left = array.slice(0, mid);
    let right = array.slice(mid);
    
    

  return mid;
};

console.log(mergeSort([3, 1, 0, 5, 9, 10, 4]));
