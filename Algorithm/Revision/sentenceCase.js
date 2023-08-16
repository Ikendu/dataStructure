//change the first character to upper case
const sentence = (str) => {
  return str.toLowerCase().replace(/(^|\s)\S/gi, (L) => L.toUpperCase());
};
console.log(sentence("hello, how are you Doing"));

//using map(), replace and charAt() method
const senCase = (str) => {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => {
      return word.replace(word.charAt(0), word.charAt(0).toUpperCase());
    })
    .join(" ");
};
console.log(senCase("hello, how are yOu Doing"));

//using map() and slice()
const sentenceCase = (str) => {
  let newStr = str.split(" ");
  let finalResult = [];

  for (i in newStr) {
    finalResult[i] =
      newStr[i][0].toUpperCase() + newStr[i].slice(1).toLowerCase();
  }
  return finalResult.join();
};
console.log(sentenceCase("hello, how are yOu Doing"));
