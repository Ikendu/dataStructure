const wordCode = (str) => {
  let input = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let output = "NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm";

  return str
    .split("")
    .map((item) => {
      let index = input.indexOf(item);
      if (index > -1) {
        return output[index];
      } else {
        return item;
      }
    })
    .join("");
};
console.log(wordCode("SERR PBQR PNZC!"));
//let test = [4, 5, 6, 3, 9];
//console.log(test.indexOf(9));

//using character code and regex to test alphabet
const wordCode1 = (str) => {
  let result = [];

  return str
    .split("")
    .map((item) => {
      if (/[A-Z]/.test(item)) {
        let code = item.charCodeAt() + (/[A-M]/.test(item) ? +13 : -13);
        return String.fromCharCode(code);
      } else {
        return item;
      }
    })
    .join("");

  //return result.join("");
};
console.log(wordCode1("SERR PBQR PNZC!"));

const wordCode2 = (str) => {
  return str.replace(/[a-zA-Z]/g, (char) => {
    let base = char === char.toUpperCase() ? 65 : 97;
    return String.fromCharCode((char.charCodeAt() - base + 13) % 26);
  });
};
console.log(wordCode1("SERR PBQR PNZC!"));
