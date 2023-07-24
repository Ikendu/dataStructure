//using declarative approach
const compareLast = (str, target) => {
  return str.slice(str.length - target.length) === target;
};
console.log(compareLast("hello how are you doing", "you doing"));

//using declarative approach and the fast that -sign makes slice to count backward
const matchLast = (str, last) => {
  return str.slice(-last.length) === last;
};

console.log(matchLast("hello how are you doing", "you doing"));

//using regular expression regExp
const matchEnd = (str, last) => {
  reg = new RegExp(last + "$", "i");

  return reg.test(str);
};

console.log(matchEnd("hello how are you doing", "you doing"));

//returning less string
function truncateString(str, num) {
  if (str.length <= num) {
    return str;
  }
  let newStr = str.slice(0, num);

  return newStr + "...";
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
