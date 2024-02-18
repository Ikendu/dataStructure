//using for loop iteration to get the longest string
const longest = (str) => {
  let newStr = str.split(" ");
  let longer = 0;

  for (i = 0; i < newStr.length; i++) {
    if (newStr[i].length > longer) {
      longer = newStr[i].length;
    }
  }
  return longer;
};

console.log(longest("The quick brown fox jumped over the lazy dog"));

//using array method to get the longest string
const longerStr = (str) => {
  return Math.max(...str.split(" ").map((word) => word.length));
};
console.log(longest("The quick brown fox jumped-over over the lazy dog"));

// to get the largest num of different arrays and combine them in a single array
//using for loop iteration
const getLargerNum = (arr) => {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let largeSet = arr[i][0];
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] > largeSet) {
        largeSet = arr[i][j];
      }
    }
    result[i] = largeSet;
  }
  return result;
};
console.log(
  getLargerNum([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1],
  ])
);
//using array methods
const largerNum = (arr) => {
  return arr.map((group) => {
    return group.reduce((prev, curr) => {
      return prev > curr ? prev : curr;
    });
  });
};

console.log(
  largerNum([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1],
  ])
);

//working on reduce method
let pets = ["dog", "chicken", "cat", "dog", "chicken", "chicken", "rabbit"];

let petCount = pets.reduce((obj, pet) => {
  obj[pet] ? obj[pet]++ : (obj[pet] = 1);
  return obj;
}, {});
console.log(petCount);

const largeNum = (arr) => {
  result = [];
  for (let i = 0; i < arr.length; i++) {
    let larger = arr[i][0];
    for (let j = 0; j < arr[i].length; j++) {
      arr[i][j] > larger && (larger = arr[i][j]); //using ternary statement
    }
    result[i] = larger;
  }
  return result;
};
console.log(
  largeNum([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1],
  ])
);
