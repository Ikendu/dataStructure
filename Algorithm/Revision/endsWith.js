//built-in function
const endsWith = (str, target) => {
  return str.endsWith(target);
};
console.log(endsWith("Bastian", "ian"));

//using slice
const endWith = (str, target) => {
  return str.slice(str.length - target.length) === target;
};
console.log(endWith("Bastian", "ian"));

//using regexp

const endStr = (str, end) => {
  let regex = new RegExp(end + "$", "i");
  return regex.test(str);
};
console.log(endStr("Bastian", "ian"));

//repeat a string num times
const repeater = (str, num) => {
  newStr = "";
  for (let i = 0; i < num; i++) {
    newStr += str;
  }
  return newStr;
};
console.log(repeater("hello", 3));
