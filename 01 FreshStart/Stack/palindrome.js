const palindrome = (str) => {
  str = str.match(/[\w]/g).join("");
  let stack = "";
  for (let i = str.length - 1; i >= 0; i--) {
    stack += str[i];
  }

  return stack == str;
};

console.log(palindrome(`10001`));

const palindrome1 = (str) => {
  str = str.match(/[\w]/g);
  let newStr = "";
  while (str.length > 0) {
    newStr += str.pop();
  }
  return newStr;
};
console.log(palindrome1("h=-0=ldjdsfjhsk"));
