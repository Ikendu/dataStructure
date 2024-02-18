//pair up DNA strands
const pairing = (str) => {
  let newArr = [];

  for (let i = 0; i < str.split("").length; i++) {
    if (str[i] == "C") {
      newArr.push(["C", "G"]);
    } else if (str[i] == "G") {
      newArr.push(["G", "C"]);
    } else if (str[i] == "A") {
      newArr.push(["A", "T"]);
    } else if (str[i] == "T") {
      newArr.push(["T", "A"]);
    }
  }
  return newArr;
};
console.log(pairing("GCG"));

//using object lookup(single pair)
const pairing1 = (str) => {
  let pairs = {
    A: "T",
    C: "G",
    T: "A",
    G: "C",
  };

  return str.split("").map((pair) => [pair, pairs[pair]]);
};
console.log(pairing1("GCG"));

//using object lookup (full)
const pairing2 = (str) => {
  let pairs = {
    A: ["A", "T"],
    T: ["T", "A"],
    C: ["C", "G"],
    G: ["G", "C"],
  };
  return str.split.map((x) => pairs[x]);
};
console.log(pairing2("GCG"));
