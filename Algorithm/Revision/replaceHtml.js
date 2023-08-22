//convert the strinh to html type
const htmlReplace = (str) => {
  let converter = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "<>": "&lt;&gt;",
    "'": "&apos;",
  };
  return str.replace(/[&<>"']/g, (i) => converter[i]);
};
console.log(htmlReplace("Dolce <> Gabbana"));

//using the map method
const htmlReplace1 = (str) => {
  let converter = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "<>": "&lt;&gt;",
    "'": "&apos;",
  };
  return str
    .split("")
    .map((item) => converter[item] || item)
    .join("");
};
console.log(htmlReplace1("Dolce <> Gabbana"));

//using for-in
const htmlReplace2 = (str) => {
  let converter = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "<>": "&lt;&gt;",
    "'": "&apos;",
  };
  for (let i in converter) {
    str = str.replace(new RegExp(i, "g"), converter[i]);
  }
  return str;
};
console.log(htmlReplace2("Dolce <> Gabbana"));

//using switch-case split and join
const htmlReplace3 = (str) => {
  str = str.split("");
  for (let i in str) {
    switch (str[i]) {
      case "&":
        str[i] = "&amp";
        break;
      case "<":
        str[i] = "&lt;";
        break;
      case ">":
        str[i] = "&gt;";
        break;
      case '"':
        str[i] = "&quot;";
        break;
      case "'":
        str[i] = "&apos;";
        break;
    }
  }
  return str.join("");
};
console.log(htmlReplace3("Dolce <> Gabbana"));
