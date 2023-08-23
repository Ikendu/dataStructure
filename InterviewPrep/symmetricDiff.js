//get the symmetric difference between two of more arrays
//items that are not found in more than one of the arrays

//using map-iteration to get the arr diff
const symmetric = (...args) => {
  const diff = (arr1, arr2) => {
    let result = [];

    arr1.map((item) => {
      if (arr2.indexOf(item) < 0) result.push(item);
    });
    arr2.map((item) => {
      if (!arr1.includes(item)) result.push(item);
    });
    return result;
  };
  return [...new Set(args.reduce(diff))];
};
console.log(symmetric([1, 2, 3, 3], [5, 2, 1, 4]));
