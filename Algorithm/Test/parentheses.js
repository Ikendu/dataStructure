const parentheses = (str) => {
  let result = "";
  let right = "";
  let left = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(" && str[i + 1] === ")") {
      return "valid";
    }
    if (str[i] == "[" && str[i + 1] == "]") {
      return "valid";
    }
    if (str[i] == "{" && str[i + 1] == "}") {
      return "valid";
    }
    // if (str[i] == "(" || str[i] == "{" || str[i] == "[") {
    //   right += str[i];
    // }
    // if (str[i] == ")" || str[i] == "}" || str[i] == "]") {
    //   left += str[i];
    // }
  }
  //   if (right.length === left.length) {
  //     return "valid";
  //   }
  //console.log(right, left);
  return "invalid";
};
console.log(parentheses("{{{[]}}}"));
