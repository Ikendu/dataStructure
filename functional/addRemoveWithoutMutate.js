//adding to an array without mutation

const add = (arr, item) => {
  return [...arr, item];
};
//remove without mutation
const remove = (arr, item) => {
  return arr.filter((element) => element !== item);
};
const newItem = add(["God", "is", "great"], "and high");
console.log(newItem);

const newList = remove(
  ["life", "health", "riches", "wealth", "moody", "love", "peace"],
  "moody"
);
console.log(newList);
