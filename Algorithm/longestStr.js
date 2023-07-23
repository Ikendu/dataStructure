//using for loop iteration
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

const longerStr = (str) => {
  return Math.max(...str.split(" ").map((word) => word.length));
};
console.log(longest("The quick brown fox jumped-over over the lazy dog"));
