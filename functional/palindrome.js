const palindrome = (str) => {
  str = str.toLowerCase().match(/[a-zA-Z0-9]/g);
  for (let i = 0, j = str.length - 1; i < j; i++) {
    if (str[i] !== str[j - i]) {
      return false;
    }
  }
  return true;
};
console.log(palindrome("never odd or even"));

//using split-reverse-join method
const palindrom = (str) => {
  let newStr = str.toLowerCase().replace(/[\W_]/g, "");
  return newStr === newStr.split("").reverse().join("");
};
console.log(palindrom("never odd or even"));
