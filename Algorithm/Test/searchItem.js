const searcher = (list, query) => {
  return query.map((item) => {
    return list.filter((ele) => ele === item).length;
  });
};
console.log(searcher(["def", "de", "fgh", "lmn", "fgh"], ["de", "lmn", "fgh"]));

const searcher1 = (list, query) => {
  let newA = [];
  for (let i of query) {
    let count = 0;
    for (let j of list) {
      if (i === j) count++;
    }
    newA.push(count);
  }
  return newA;
};
console.log(searcher1(["def", "de", "fgh", "de", "fgh"], ["de", "lmn", "fgh"]));
