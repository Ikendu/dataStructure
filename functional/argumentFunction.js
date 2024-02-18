function sumArgument() {
  const [first, second] = arguments;

  if (typeof first === "number") {
    if (typeof second === "number") return first + second;
    if (arguments.length === 1) return (second) => sumArgument(first, second);
  }
}
console.log(sumArgument(2, 3));
