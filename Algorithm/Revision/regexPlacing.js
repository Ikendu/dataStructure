const latin = (str) => {
  let consonants = /^[^aeiou]+/g;
  let result = str.match(consonants);
  return result
    ? str.replace(result, "").concat(result).concat("ay")
    : str.concat("way");
};
console.log(latin("schwxartz"));
