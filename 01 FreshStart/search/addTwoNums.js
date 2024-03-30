function addtwoNums(arr, ans) {
  let store = {};

  for (let i = 0; i < arr.length; i++) {
    let value = arr[i];
    if (!store[value]) {
      store[ans - value] = value;
    } else {
      console.log(store);
      return [store[value], value];
    }
  }
  console.log(store);
  return -1;
}
//test
console.log(addtwoNums([2, 3, 4, 1, 6, 7, 5, 8, 9], 9));
