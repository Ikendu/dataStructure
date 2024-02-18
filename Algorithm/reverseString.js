//using iteration with for-loop
const reverser = (str) => {
  let newStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
};

console.log(reverseStr("David"));

//using array method
const reverString = (str) => {
  return str.split("").reverse().join("");
};

console.log(revString("Another David"));
