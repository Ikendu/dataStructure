const longest = (str) => {
  let newStr = str.split(" ");
  let maxLength = 0;

  for (let i = 0; i < newStr.length; i++) {
    if (maxLength < newStr[i].length) {
      maxLength = newStr[i].length;
    }
  }
  //   console.log(str);
  //   console.log(newStr);
  return maxLength;
};

console.log(longest("The quick brown fox jumpe88d over the lazy dog"));

//using reduced
const longestWord = (str) => {
  return str
    .split(" ")
    .reduce((longest, word) => Math.max(longest, word.length), 0);
};
console.log(longestWord("The quick brown fox jumped over the lazy dog"));

//using map and Math.max
const longerWord = (str) => {
  return Math.max(...str.split(" ").map((word) => word.length));
};
console.log(longerWord("The quick brown fox jumped over the lazyooooo dog"));

//OR
const longer = (str) => {
  return Math.max.apply(
    null,
    str.split(" ").map((word) => word.length)
  );
};
console.log(longerWord("The quick brown fox jumped over the lazyooooo dog"));
