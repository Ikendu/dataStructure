const checkTruth = (collection, pre) => {
  for (let i in collection) {
    if (!collection[i][pre]) return false;
  }
  return true;
};
console.log(
  checkTruth(
    [
      { name: "freeCodeCamp", users: [{ name: "Quincy" }, { name: "Naomi" }] },
      { name: "Code Radio", users: [{ name: "Camperbot" }] },
      { name: "", users: [] },
    ],
    "users"
  )
);

//using counter
const checkTruth1 = (collection, pre) => {
  let counter = 0;
  for (let i in collection) {
    if (collection[i][pre]) counter++;
  }
  return counter == collection.length;
};
console.log(
  checkTruth1(
    [
      { name: "freeCodeCamp", users: [{ name: "Quincy" }, { name: "Naomi" }] },
      { name: "Code Radio", users: [{ name: "Camperbot" }] },
      { name: "", users: [] },
    ],
    "users"
  )
);

//using .every
const checkTruth2 = (collection, pre) => {
  return collection.every((val) => val[pre]);
};
console.log(
  checkTruth2(
    [
      { name: "freeCodeCamp", users: [{ name: "Quincy" }, { name: "Naomi" }] },
      { name: "Code Radio", users: [{ name: "Camperbot" }] },
      { name: "", users: [] },
    ],
    "users"
  )
);
