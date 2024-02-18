//using regex and string method
const toUpper = (str) => {
  let newStr = str.toLowerCase().replace(/(^|\s)\S/g, (L) => L.toUpperCase());
  //the regex selects the non-space character that comes immediatly
  //after the beginning of after a space
  console.log(newStr);
};
toUpper("HERE IS MY HANDLE HERE IS MY SPOUT");

//user various string methods
const toUpperC = (str) => {
  let newStr = str
    .toLowerCase()
    .split(" ")
    .map((val) => val.replace(val.charAt(0), val.charAt(0).toUpperCase()))
    .join(" ");
  //newStr.join(" ");
  console.log(newStr);
};
toUpperC("hello I Am becoming greater daily");

const toLower = (str) => {
  let newStr = str
    .toUpperCase()
    .split(" ")
    .map((val) => val.replace(val.charAt(0), val.charAt(0).toLowerCase()))
    .join(" ");

  console.log(newStr);
};
toLower("hello I Am becoming greater daily");
