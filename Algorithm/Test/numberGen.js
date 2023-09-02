const numgen = (digits, num) => {
  let result = 0;
  //let digits = digits.

  for (let i = 0; i < num.length; i++) {
    result += Math.abs(digits.indexOf(num[i]) - digits.indexOf(num[i - 1]));
    //console.log(digits.indexOf(num[i]));
  }
  return result - 1;
};
console.log(numgen("8459761203", "5439"));
