//get the missing character
const missingChar = (str) => {
  let result = "complete expression";
  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) - str.charCodeAt(i - 1) > 1) {
      result = String.fromCharCode(str.charCodeAt(i - 1) + 1) + " is missing";
    }
  }
  return result;
};
console.log(missingChar("abcdefg"));

//another form
const missingChar1 = (str) => {
  let result = "complete range";

  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) !== str.charCodeAt(i - 1) + 1) {
      result = String.fromCharCode(str.charCodeAt(i - 1) + 1);
    }
  }
  return result;
};
console.log(missingChar1("abcdefg"));
