function marsExploration(s) {
  // Write your code here
  s = s.split("");
  let count = 0;
  for (let i = 0; i < s.length - 2; i += 3) {
    if (s[i] !== "S") count++;
    if (s[i + 1] !== "O") count++;
    if (s[i + 2] !== "S") count++;
  }
  return count;
}
console.log(
  marsExploration(
    "SOSOSOSOSDSDSKWOSDOSDOASDOASDFAFJDFDOSOSOKLKLWNSOSOSNDSKDDOSOSOSJDSDSOOSOSDSDOSASSOASDSAOSOSODSDSOASDWS"
  )
);
