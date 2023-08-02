//regex to select underscore(_), whitespcae, and
//closedUp lower-upper case and replace them with hyphen(-)

const replace = (str) => {
  return str
    .replace(/([a-z])([A-Z])/g, "$1 $2") //use "$1 $2" selector to put a space between lower-Upper case
    .replace(/\s|_/g, "-") //replace all space and underscore with hyphen;
    .toLowerCase(); //turn all to lower-case
};
console.log(replace("He is comming_soon DontGoThere"));

//using split and join
const matchRegx = (str) => {
  return str
    .split(/\s|_|(?=[A-Z])/) //split at whitespace, underscore, tailing upperCase
    .join("-") //join split with hyphen
    .toLowerCase(); //turn to lowercase
};
console.log(matchRegx("He is comming_soon DontGoThere"));

//using split and join II
const regexMatch = (str) => {
  return str
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .split(/_| /)
    .join("-")
    .toLowerCase();
};
console.log(regexMatch("He is comming_soon DontGoThere"));
