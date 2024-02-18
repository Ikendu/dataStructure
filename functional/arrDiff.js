//imperative solution using for loop and if statement
const arrDiff = (arr1, arr2) => {
  newArr = [];

  const myDiff = (first, second) => {
    for (let i = 0; i < first.length; i++) {
      if (second.indexOf(first[i]) === -1) {
        newArr.push(first[i]);
      }
    }
  };
  myDiff(arr1, arr2);
  myDiff(arr2, arr1);

  return newArr;
};

console.log(arrDiff([2, 4, 45, 1, 6, 7], [1, 2, 4, 6]));
console.log(arrDiff(["he", "is", "coming", "soon"], ["he", "is", "coming"]));

//using declarative approach with concat, filter and includes
const checkDiff = (arr1, arr2) => {
  let arr3 = arr1.concat(arr2);
  let newArr = arr3.filter(
    (item) => arr1.includes(item) == false || arr2.includes(item) == false
  );

  return newArr;
};
console.log(checkDiff([2, 4, 45, 1, 6, 7], [1, 2, 4, 6]));
console.log(checkDiff(["he", "is", "coming", "soon"], ["he", "is", "coming"]));

//using set operations with forEach
const getDiff = (arr1, arr2) => {
  let newArr = new Set(arr1);

  arr2.forEach((item) =>
    newArr.has(item) ? newArr.delete(item) : newArr.add(item)
  );
  return Array.from(newArr);
};
console.log(checkDiff([12, 4, 45, 1, 6, 7], [1, 2, 4, 6, 100]));
console.log(
  checkDiff(["she", "is", "coming", "soon"], ["she", "is", "coming"])
);

//using array spread method and indexOf
const diffArr = (arr1, arr2) => {
  let newArr = [...arrDiff(arr1, arr2), ...arrDiff(arr2, arr1)];

  const arrDiff = (a, b) => {
    return a.filter((item) => b.indexOf(item) !== -1);
  };
  return newArr;
};
console.log("........");
console.log(checkDiff([12, 4, 45, 1, 6, 7], [1, 2, 4, 6, 100]));
console.log(
  checkDiff(["she", "is", "coming", "soon"], ["she", "is", "coming"])
);
