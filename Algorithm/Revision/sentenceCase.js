//change the first character to upper case
const sentence = (str) => {
  return str.toLowerCase().replace(/(^|\s)\w/gi, (L) => L.toUpperCase());
};
console.log(sentence("hello, how are you Doing"));

//using map method
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
