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
  for (let i = 1; i < str.length; i++) {
    if (str.charCodeAt(i) !== str.charCodeAt(i - 1) + 1) {
      result = String.fromCharCode(str.charCodeAt(i - 1) + 1);
    }
  }
  return result;
};
console.log(missingChar1("abcdefg"));

//count string from 0
const missingChar2 = (str) => {
  let result = "Complete";

  for (let i in str) {
    let coded = str.charCodeAt(i);
    if (coded !== str.charCodeAt(0) + i) {
      result = String.fromCharCode(coded - 1);
    }
  }
  return result;
};
console.log(missingChar2("abcdeg"));

//split and forEach
const missingChar3 = (str) => {
  let result = "Non missing";
  let sequence = str.charCodeAt(0);

  str.split("").forEach((letter) => {
    if (letter.charCodeAt(0) === sequence) {
      sequence++;
    } else {
      result = String.fromCharCode(sequence);
    }
  });
  return result;
};
console.log(missingChar3("abcdefg"));
