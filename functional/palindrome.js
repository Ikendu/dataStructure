//using backward iteration
const palindrome = (str) => {
  str = str.toLowerCase().replace(/\W|_/gi, "");
  let back = "";
  for (let i = str.length - 1; i >= 0; i--) {
    back += str[i];
  }
  console.log(back);

  return str === back;
};
console.log(palindrome("never odd or even"));

//using split-reverse-join method
const palindrom = (str) => {
  let newStr = str.toLowerCase().replace(/[\W_]/g, "");
  return newStr === newStr.split("").reverse().join("");
};
console.log(palindrom("never odd or evenr"));
