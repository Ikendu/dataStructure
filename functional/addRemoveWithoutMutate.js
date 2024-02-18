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

//................................................................./

//using spread with push
const addIn = (arr, item) => {
  let newlist = [...arr];

  newlist.push(item);
  return newlist;
};
//removing with indexOf method
const removeIt = (arr, item) => {
  let newList = [...arr];

  let index = newList.indexOf(item);
  if (index >= 0) {
    newList.splice(index, 1);
  }
  return newList;
};

const newB = addIn(["God", "is", "great", "most High"], "and high");
console.log(newB);

const newIdea = removeIt(
  ["life", "health", "riches", "wealth", "moody", "love", "happiness"],
  "moody"
);
console.log(newIdea);
