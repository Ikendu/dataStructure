//using quick sort for sorting is very fast

function quickSort(array) {
  if (array.length == 0) return [];

  let lower = [];
  let higher = [];
  let pivot = array[0];

  for (let i = 1; i < array.length; i++) {
    if (array[i] < pivot) lower.push(array[i]);
    else higher.push(array[i]);
  }
  return quickSort(lower).concat(pivot, quickSort(higher));
}

function creatList(num) {
  let list = [];
  for (let i = 0; i < num; i++) {
    list.push(Math.floor(Math.random() * num + 1));
  }
  return list;
}

let newList = creatList(1000000);
// console.log(newList);
console.log(quickSort(newList));
