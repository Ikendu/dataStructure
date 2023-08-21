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

//using object lookup
