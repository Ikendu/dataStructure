//return the number of characters common to all the elements of the array

//using .every and .includes
const rockSearch = (arr) => {
  let count = 0;
  arr = arr.sort((a, b) => a.length - b.length);
  //arr[0] = Array.from(new Set(arr[0]))
  arr[0] = [...new Set(arr[0])];

  for (let i of arr[0]) {
    if (arr.every((rock) => rock.includes(i))) count++;
  }
  console.log(arr[0]);
  return count;
};
console.log(rockSearch(["abcdde", "baccd", "eeabg"]));

//OR
const rockSearch1 = (arr) => {
  let counter = 0;
  [...new Set(arr[0])].map((item) => {
    if (arr.every((ele) => ele.includes(item))) counter++;
  });
  return counter;
};
console.log(rockSearch1(["abcdde", "baccd", "eeabg"]));

//OR

const rockSearch2 = (arr) => {
  arr
    .sort((a, b) => a.length - b.lenght)
    .map((item) => {
      for (i of arr[0]) {
        if (item.indexOf(i) < 0) {
          arr[0] = arr[0].replace(i, "");
        }
      }
    });
  console.log(arr[0]);
  return [...new Set(arr[0])].length;
};
console.log(rockSearch2(["bdabcdde", "baaccd", "eeabg"]));
