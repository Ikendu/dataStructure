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
