const linear = (data, array) => {
  for (let i in array) {
    if (array[i] == data) return `Found at index ${i}`;
  }
  return `${data} not found`;
};

function listData(num) {
  let arr = [];
  for (let i = 0; i < num; i++) {
    arr[i] = Math.floor(Math.random() * num + 1);
  }
  return arr;
}

// console.log(linear(44, listData(100)));

function minimumValue(arr) {
  let first = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < first) first = arr[i];
  }
  return first;
}

// console.log(minimumValue(listData(100)));

function maximum(arr) {
  let first = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > first) first = arr[i];
  }
  return first;
}

// console.log(maximum(listData(100)));

function organized(arr) {
  let first = arr[0];
  let idx = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < first) {
      first = arr[i];
      idx = i;
    }
  }
  let item = arr.splice(idx, 1).unshift(first);
}
console.log(organized(listData(100)));
