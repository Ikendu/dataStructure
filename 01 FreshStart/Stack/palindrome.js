const palindrome = (str) => {
  str = str.match(/[\w]/g).join("");
  let stack = "";
  for (let i = str.length - 1; i >= 0; i--) {
    stack += str[i];
  }

  return stack == str;
};

console.log(palindrome(`10001`));
