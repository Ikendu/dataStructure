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
