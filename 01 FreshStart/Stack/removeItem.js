let array = [
  "white",
  "yellow",
  "blue",
  "red",
  "yellow",
  "white",
  "yellow",
  "blue",
  "yellow",
  "red",
];

const removeItem = (items) => {
  let removed = [];
  let remains = [];
  for (let i = 0; i < items.length; i++) {
    if (items[i] === "yellow") {
      //removed.push(items[i]);
      removed = removed.concat(items[i]);
    }
  }
  for (let i = 0; i < items.length; i++) {
    if (items[i] !== "yellow") remains.push(items[i]);
  }
  console.log(removed);
  return remains;
};

console.log(removeItem(array));
