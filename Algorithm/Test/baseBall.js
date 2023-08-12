const baseBall = (ops) => {
  let x = parseInt("x");
  let record = [];
  let result = 0;

  for (let i = 0; i < ops.length; i++) {
    if (i < ops.indexOf("C")) {
      record.push(parseInt(ops[i]));
    }
    if (ops[i] === "C") {
      record.pop();
    }
    if (ops[i] === "D") {
      record.push(record[record.length - 1] * 2);
    }
    //console.log(record);
    if (i > ops.indexOf("D") && ops[i] !== "+") {
      record.push(parseInt(ops[i]));
    }
    if (ops[i] === "+") {
      record.push(record[record.length - 1] + record[record.length - 2]);
    }
  }
  for (let i = 0; i < record.length; i++) {
    result += record[i];
  }
  //console.log(record);
  return result;
};
console.log(baseBall(["5", "-2", "4", "C", "D", "9", "+", "+"]));
