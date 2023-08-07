const orbitPeriod = (arr) => {
  const GM = 398600.4418;
  const eR = 6367.4447;
  const pi = 2 * Math.PI;
  let newArr = [];

  const getResult = (obj) => {
    let a = Math.pow(eR + obj.avgAlt, 3);
    let b = Math.sqrt(a / GM);
    let c = Math.round(pi * b);

    return { name: obj.name, orbitalPeriod: c };
  };

  for (i in arr) {
    newArr.push(getResult(arr[i]));
  }
  return newArr;
};
console.log(
  orbitPeriod([
    { name: "iss", avgAlt: 413.6 },
    { name: "hubble", avgAlt: 556.7 },
    { name: "moon", avgAlt: 378632.553 },
  ])
);

//using a more compact function
const getPeriod = (arr) => {
  const GM = 398600.4418;
  const eR = 6367.4447;
  const pi = 2 * Math.PI;
  let newArr = [];

  for (i in arr) {
    const orbitalT = Math.round(
      2 * Math.PI * Math.sqrt(Math.pow(eR + arr[i].avgAlt, 3) / GM)
    );
    newArr.push({ name: arr[i].name, orbitalPeriod: orbitalT });
  }
  return newArr;
};
console.log(getPeriod([{ name: "moon", avgAlt: 378632.553 }]));
