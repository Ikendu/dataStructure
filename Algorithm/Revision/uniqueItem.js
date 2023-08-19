//using concat
const getUnique = (arr1, arr2) => {
  return arr1
    .filter((ele) => arr2.indexOf(ele) < 0)
    .concat(arr2.filter((ele) => arr1.indexOf(ele) < 0));
};
console.log(getUnique([1, "calf", 3, "piglet"], [1, "calf", 3, 4]));

//using spread
const getUnique1 = (arr1, arr2) => {
  let newArr = [...arr1, ...arr2];
  return newArr.filter(
    (item) => arr1.indexOf(item) < 0 || arr2.indexOf(item) < 0
  );
};
console.log(getUnique1([1, "calf", 3, "piglet"], [1, "calf", 3, 4]));

//using for-loop, delete, Boolean and if statment
const getUnique2 = (arr1, arr2) => {
  let newArr = [];

  arr1.sort((a, b) => (a == b ? 0 : a > b ? 1 : -1));
  arr2.sort((a, b) => (a == b ? 0 : a > b ? 1 : -1));

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        delete arr1[i];
        delete arr2[j];
      }
    }
  }

  return arr1.filter(Boolean).concat(arr2.filter(Boolean));
};
console.log(getUnique2([1, "calf", 3, "piglet", 5, 6], [1, "calf", 3, 4]));

//using sort and traditional for-loop
const getUnique3 = (arr1, arr2) => {
  let newArr = [];
  let sorted = arr1.concat(arr2).sort();

  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] !== sorted[i + 1] && sorted[i] !== sorted[i - 1]) {
      newArr.push(sorted[i]);
    }
  }
  return newArr;
};
console.log(getUnique3([1, "calf", 3, "piglet", 5, 6], [1, "calf", 3, 4]));

//using map of forEach method
const getUnique4 = (arr1, arr2) => {
  let diff = new Set(arr1);

  arr2.map((item) => (diff.has(item) ? diff.delete(item) : diff.add(item)));
  return Array.from(diff);
};
console.log(getUnique4([1, "calf", 3, "piglet", 5, 6], [1, "calf", 3, 4]));

//using inner function, spread, includes and filter
const getUnique5 = (arr1, arr2) => {
  const diff = (a, b) => a.filter((item) => !b.includes(item));
  return [...diff(arr1, arr2), ...diff(arr2, arr1)];
};
console.log(getUnique5([1, "calf", 3, "piglet", 50, 6], [1, 7, "calf", 3, 4]));

//using inner function and for-loop
const getUnique6 = (arr1, arr2) => {
  let newArr = [];
  const diff = (a, b) => {
    for (let i = 0; i < a.length; i++) {
      if (!b.includes(a[i])) {
        newArr.push(a[i]);
      }
    }
  };
  diff(arr1, arr2);
  diff(arr2, arr1);
  return newArr;
};
console.log(getUnique6([1, "calf", 3, "piglet", 50, 6], [1, 7, "calf", 3, 4]));
