function removeUnknown(arr) {
  let itemsToRemove = Object.values(arguments).slice(1);
  let remainingItem = [];

  for (let i = 0; i < arr.length; i++) {
    let flagger = false;

    for (let j = 0; j < itemsToRemove.length; j++) {
      if (arr[i] === itemsToRemove[j]) {
        flagger = true;
      }
    }
    if (!flagger) {
      remainingItem.push(arr[i]);
    }
  }
  return remainingItem;
}
console.log(removeUnknown([1, 2, 3, 1, 2, 3], 2, 3));
