//getting the missing character, if there is no missing character show undefined
const missingChar = (str) => {
  for (let i = 0; i < str.length; i++) {
    const charCode = str.charCodeAt(i);

    if (charCode > str.charCodeAt(0) + i) {
      return String.fromCharCode(charCode - 1);
    }
  }
  return undefined;
};

console.log(missingChar("abce"));

//using more shorter code
const missinChar = (str) => {
  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) - str.charCodeAt(i - 1) > 1) {
      return String.fromCharCode(str.charCodeAt(i - 1) + 1);
    }
  }
};
console.log(missinChar("abce"));
