let array = [2, 5, 1, 6, 8, 10, 4, 9];

const insertion = (arr) => {
  let i, j, value;
  for (i = 0; i < arr.length; i++) {
    value = arr[i];
    for (j = i - 1; j > -1 && arr[j] > value; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = value;
  }
  console.log(arr);
  return arr;
};

insertion(array);
