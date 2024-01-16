//givi
const numgen = (digits, num) => {
  let result = 0;
  //let digits = digits.

  for (let i = 0; i < num.length; i++) {
    if (digits.indexOf(num[i - 1]) !== 0);
    result += Math.abs(digits.indexOf(num[i]) - digits.indexOf(num[i - 1]));
    //console.log(digits.indexOf(num[i]));
  }
  return result - 1;
};
//console.log(numgen("8459761203", "5439"));
console.log(numgen("01234", "210"));
