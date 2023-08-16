//using slice and spread
const copyArr = (arr1, arr2, n) => {
  let front = arr2.slice(0, n);
  let back = arr2.slice(n);
  return [...front, ...arr1, ...back];
};

//using splice and spread
const copyArr1 = (arr1, arr2, n) => {
  let local = [...arr2];
  local.splice(n, 0, ...arr1);
  return local;
};

const copyArr2 = (arr1, arr2, n) => {
  let local = arr2.slice(0);
  for (let i = 0; i < arr1.length; i++) {
    local.splice(n, 0, arr1[i]);
    n++;
  }
  return local;
  //console.log(local);
};

console.log(copyArr([1, 2, 3], [4, 5, 6], 1));
console.log(
  copyArr(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2)
);

console.log(copyArr1([1, 2, 3], [4, 5, 6], 1));
console.log(
  copyArr1(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2)
);
console.log(copyArr2([1, 2, 3], [4, 5, 6], 1));
