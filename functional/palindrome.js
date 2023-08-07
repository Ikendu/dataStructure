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
