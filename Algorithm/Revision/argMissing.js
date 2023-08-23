//using spread arguments and typeof keyword
const addMissing = (...args) => {
  if (args.length > 2) return "only two numbers are needed";
  let [a, b] = [...args];
  if (typeof a == "number") {
    if (typeof b == "number") {
      return a + b;
    }
    if (!b) {
      return (b) => {
        if (typeof b === "number") return a + b;
      };
    }
  }
};
console.log(addMissing(2, 3, 4));

//using arguments method and isInteger keyword
function addMissing1() {
  let [a, b] = arguments;

  const isNum = (num) => {
    return Number.isInteger(num);
  };
  if (isNum(a)) {
    if (isNum(b)) return a + b;
    if (!b) {
      return (b) => {
        return addMissing(a, b); //OR return a + b
      };
    }
  }
}
console.log(addMissing1(2, 33));
