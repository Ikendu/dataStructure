const wordCode = (str) => {
  let input = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let output = "NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm";

  let index = (x) => input.indexOf(x);
  let trans = (x) => (index(x) > -1 ? output[index(x)] : x);

  return str.split("").map(trans).join("");
};
console.log(wordCode("SERR PBQR PNZC"));
