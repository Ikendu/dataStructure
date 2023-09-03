const printHash = (n) => {
  console.log("      ^");
  for (let i = 1; i <= n; i++) {
    let space = " ".repeat(n - i);
    let hash = "#".repeat(i * 2);
    console.log(space + hash);
  }
};
printHash(6);
