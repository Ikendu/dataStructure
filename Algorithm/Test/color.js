const colors = (str) => {
  let newStr = str.split(" ");
  let getter = [];
  let index = [];
  let result = [];

  for (let i = 0; i < newStr.length; i++) {
    getter.push(Number(newStr[i].substr(newStr[i].length - 1)));
    index.push(i);
  }
  for (let i = 0; i < index.length; i++) {
    for (let j = 0; j < getter.length; j++) {
      if (index[i] === index[j]) result.push(newStr[getter[j]]);
    }
  }
  console.log(newStr, index, getter);
  return result;
};
console.log(colors("blue2 black4 white1 red3"));
