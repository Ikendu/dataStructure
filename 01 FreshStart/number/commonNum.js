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
      last = current[j];
    }
  }
  console.log(store);
  let common = [];
  for (let i in store) {
    if (store[i] === k) common.push(i);
  }
  return common;
}

// console.log(commonNum([3, 4, 1, 5, 6], [2, 3, 5, 7], [3, 9, 1, 10, 5]));

//repeating the thought process

function commonItems(...arr) {
  let length = arr.length;
  //   console.log(length, arr);

  let store = {};
  let common = [];

  for (let i = 0; i < length; i++) {
    let current = arr[i].sort((a, b) => a - b);
    // console.log(current);
    let last = null;
    for (let j = 0; j < current.length; j++) {
      if (current[j] !== last) {
        if (!store[current[j]]) {
          store[current[j]] = 1;
          //   console.log(store);
        } else {
          store[current[j]]++;
        }
      }
      last = current[j];
    }
  }
  console.log(store);
  for (let idx in store) {
    if (store[idx] === length) common.push(idx);
  }
  return common;
}

console.log(
  commonItems(
    [3, 4, 1, 5, 6],
    [2, 3, 5, 7, 6],
    [3, 9, 1, 6, 10, 5],
    [2, 3, 5, 6, 7],
    [3, 20, 6, 5, 8, 5]
  )
);
