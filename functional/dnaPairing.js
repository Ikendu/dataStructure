const dnaPair = (str) => {
  let finalStr = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] == "A") finalStr.push(["A", "T"]);
    if (str[i] == "T") finalStr.push(["T", "A"]);
    if (str[i] == "G") finalStr.push(["G", "C"]);
    if (str[i] == "C") finalStr.push(["C", "G"]);
  }
  return finalStr;
};
console.log(dnaPair("GCG"));
