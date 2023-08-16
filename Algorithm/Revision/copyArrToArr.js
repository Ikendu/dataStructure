const copyArr = (arr1, arr2, n) => {
  let front = arr2.slice(0, n);
  let back = arr2.slice(n);
  return [...front, ...arr2, ...back];
};

console.log(copyArr([1, 2, 3], [4, 5, 6], 1));
console.log(
  copyArr(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2)
);
