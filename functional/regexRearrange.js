//using regex, match and replcae
const latinArrange = (str) => {
  let regexer = /^[^aeiou]+/;
  let matched = str.match(regexer);

  return matched
    ? str.replace(matched, "").concat(matched).concat("ay")
    : str.concat("way");
};
console.log(latinArrange("zyfcagidi"));

const arrangeLatin = (str) => {
  return str
    .replace(/^[aeiou]\w*/gi, "$&way")
    .replace(/(^[^aeiou]+)(\w*)/, "$2$1ay");
};
console.log(arrangeLatin("agidi"));
