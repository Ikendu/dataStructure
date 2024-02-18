const binaryStr = (str) => {
  let myStr = str.split(" ");
  let newStr = [];

  for (let i = 0; i < str.length; i++) {
    newStr.push(String.fromCharCode(parseInt(myStr[i], 2)));
  }
  return newStr.join("");
};
console.log(
  binaryStr(
    "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
  )
);

//using spread and map method
const convertBinary = (str) => {
  return String.fromCharCode(
    ...str.split(" ").map((item) => parseInt(item, 2))
  );
};
console.log(
  convertBinary(
    "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
  )
);
