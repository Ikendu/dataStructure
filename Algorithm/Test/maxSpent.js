//return the maximum that can be spent, or -1 if it is not possible to buy
//both items

const maxSpent = (boards, drives, b) => {
  let result = [];

  for (let i of boards) {
    for (let j of drives) {
      let curr = i + j;
      if (curr <= b) result.push(curr);
    }
  }
  result = result.sort((a, b) => b - a);
  return result[0];
};
console.log(maxSpent([3, 1, 10, 4], [5, 2, 8], 14));

//OR

const maxSpent2 = (boards, drives, b) => {
  let max = -1;
  for (let i of boards) {
    for (let j of drives) {
      let curr = i + j;
      if (curr <= b && curr > max) max = curr;
    }
  }
  return max;
};
console.log(maxSpent2([3, 1, 10, 4], [5, 2, 8], 14));
