//using spread arguments
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
