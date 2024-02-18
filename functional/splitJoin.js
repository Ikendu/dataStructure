const spliter = (arr) => {
  return arr.split(" "); //split by space
  arr.split(/\d/); //split by digit
  arr.split(/\W/); //split by non alphanumeric
};

const sentence = (arr) => {
  return arr.split(/\W/).join(" "); //split by non-alphanumeric and join by space to form a sentence
};
