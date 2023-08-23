//The radius of the earth is 6367.4447 kilometers, and the GM value of
//earth is 398600.4418 km3s-2.
//using map, forEach cannot be returned directy
const orbital = (arr) => {
  let eRadius = 6367.4447;
  let Gm = 398600.4418;
  let pi = 2 * Math.PI;

  return arr.map((item) => {
    let a3 = Math.pow(item.avgAlt + eRadius, 3);
    let root = Math.sqrt(a3 / Gm);
    return { name: item.name, orbitalPeriod: Math.round(pi * root) };
  });
};
console.log(
  orbital([
    { name: "iss", avgAlt: 413.6 },
    { name: "hubble", avgAlt: 556.7 },
    { name: "moon", avgAlt: 378632.553 },
  ])
);

const orbital1 = (arr) => {
  let eRadius = 6367.4447;
  let Gm = 398600.4418;
  let pi = 2 * Math.PI;
  let newArr = [];

  arr.forEach((item) => {
    let a3 = Math.pow(eRadius + item.avgAlt, 3);
    let root = Math.sqrt(a3 / Gm);
    item.orbitalPeriod = Math.round(pi * root);
    newArr.push({ name: item.name, orbitalPeriod: item.orbitalPeriod });
  });
  return newArr;
};
console.log(
  orbital1([
    { name: "iss", avgAlt: 413.6 },
    { name: "hubble", avgAlt: 556.7 },
    { name: "moon", avgAlt: 378632.553 },
  ])
);
