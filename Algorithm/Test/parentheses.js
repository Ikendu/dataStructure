const parentheses = (str) => {
  let result = "";
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
  }
  return "invalid";
};
console.log(parentheses("{]"));

//using chatGPT
const isMatch = (str) => {
  const stack = [];

  const bracketStore = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  for (char of str) {
    if (char in bracketStore) {
      stack.push(char);
    } else {
      const lastBracket = stack.pop();
      if (bracketStore[lastBracket] !== char) {
        return "invalid";
      }
    }
  }
  if (stack.length === 0) {
    return "valid";
  }
};
console.log(isMatch("[[[{}]]]{}[]{}"));
