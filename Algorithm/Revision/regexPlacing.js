const latin = (str) => {
  let consonants = /^[^aeiou]+/g;
  let result = str.match(consonants);
  return result
    ? str.replace(result, "").concat(result).concat("ay")
    : str.concat("way");
};
console.log(latin("schwxartz"));

const latin1 = (str) => {
  return str
    .replace(/^[aeiou]\w*/g, "$&way")
    .replace(/(^[^aeiou]+)(\w*)/g, "$2$1ay");
};
console.log(latin1("schwxartz"));
