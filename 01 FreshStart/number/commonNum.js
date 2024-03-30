function commonNum(...arr) {
  let store = {};

  let k = arr.length;
  console.log(k);
  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    let current = arr[i].sort((a, b) => a - b);
    for (let j = 0; j < current.length; j++) {
      let last = null;
      if (current[j] !== last) {
        if (!store[current[j]]) {
          store[current[j]] = 1;
        } else {
          store[current[j]]++;
        }
      }
    }
  }
  console.log(store);
  let common = [];
  for (let i in store) {
    if (store[i] === k) common.push(i);
  }
  return common;
}

console.log(commonNum([3, 4, 1, 5, 6], [2, 3, 5, 7], [3, 9, 1, 10, 5]));
