//review of special

const special = (arr) => {
  let newA = new Set();

  for (let i of arr) {
    if (newA.has(i)) {
      newA.delete(i);
    } else {
      newA.add(i);
    }
  }
  newA = [...newA];
  return newA.length > 0 ? newA.join(" ") : -1;
};
console.log(special([2, 4, 2, 4, 1, 1, 5, 6, 7, 8]));
