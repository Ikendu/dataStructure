const extract = (collection, match) => {
  let sourceKey = Object.keys(match);

  return collection.filter((obj) =>
    sourceKey.every((key) => obj.hasOwnProperty(key) && obj[key] === match[key])
  );
};

console.log(
  extract(
    [
      { first: "Romeo", last: "Montague" },
      { first: "Mercutio", last: null },
      { first: "Tybalt", last: "Capulet" },
    ],
    { last: "Capulet" }
  )
);

//addin .map and reduce
const extractItem = (arr, match) => {
  let sourceKey = Object.keys(match);

  return arr.filter((obj) =>
    sourceKey
      .map((key) => obj.hasOwnProperty(key) && obj[key] === match[key])
      .reduce((a, b) => a && b)
  );
};
console.log(
  extractItem(
    [
      { first: "Romeo", last: "Montague" },
      { first: "Mercutio", last: null },
      { first: "Tybalt", last: "Capulet" },
    ],
    { last: "Capulet" }
  )
);
