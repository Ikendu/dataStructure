//using regex and string method
const toUpper = (str) => {
  let newStr = str.toLowerCase().replace(/(^|\s)\S/g, (L) => L.toUpperCase());
  console.log(newStr);
};
toUpper("HERE IS MY HANDLE HERE IS MY SPOUT");

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
