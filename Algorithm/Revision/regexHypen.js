const hyphen = (str) => {
  return str
    .trim()
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/ |_/g, "-")
    .toLowerCase();
};
console.log(hyphen("AllThe-small Things  "));

const hyphen1 = (str) => {
  return str
    .trim()
    .split(/ |_|(?=[A-Z])/g)
    .join("-")
    .toLowerCase();
};
console.log(hyphen1("AllThe-small Things  "));
