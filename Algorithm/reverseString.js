//using iteration with for-loop
const reverseStr = (str) => {
  let revStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    revStr += str[i];
  }
  return revStr;
};

console.log(reverseStr("David"));

//using array method
const revString = (str) => {
  newStr = str.split("").reverse().join("");
  return newStr;
};

console.log(revString("Another David"));
