const reverseString = (str) => {
  let newStr = "";
  //the for-loop is used to iterate within the string
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
};
console.log(reverseString("Baby Akuoma"));

//using the split, reverse and join methods
const reverser = (str) => {
  return str.split("").reverse().join("");
  //split the string between characters, reverse their position and join them back
};
console.log(reverser("Baby Akuoma"));
