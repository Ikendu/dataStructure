function find(data, arr) {
  let item;
  let newArr = [];
  for (let i in arr) {
    if (arr[i] == data) {
      item = arr.splice(i, 1);
      newArr = newArr.concat(item).concat(arr);
      console.log(newArr);
      return "Data found";
    }
  }
}
find(10, [40, 30, 9, 8, 11, 10, 60, 33]);
