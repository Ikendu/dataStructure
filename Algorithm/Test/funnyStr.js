const funny = (s) => {
  let str = [];
  let str1 = [];
  let result1 = [];
  let result2 = [];

  for (let i = 0; i < s.length; i++) {
    str1.push(s[i].charCodeAt());
    str.unshift(s[i].charCodeAt());
  }
  for (let i = 1; i < str.length; i++) {
    result1.push(Math.abs(str[i] - str[i - 1]));
  }
  for (let i = 1; i < str1.length; i++) {
    result2.push(Math.abs(str1[i] - str1[i - 1]));
  }
  for (let i = 0; i < result1.length; i++) {
    if (result1[i] !== result2[i]) {
      return "not funny";
    }
  }
  return "funny";
  console.log(str1, str, result2);
  return result1;
};
console.log(funny("acxzhj"));
