const hyphen = (str) => {
  return str
    .trim()
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/ |_/g, "-")
    .toLowerCase();
};
console.log(hyphen("AllThe-small Things  "));
