function hackerrankInString(s) {
  // Write your code here
  let char = "hackerrank";
  let counter = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] == char[counter]) counter++;
    if (char.length == counter) return "YES";
  }
  return "NO";
}
console.log(hackerrankInString("ereihamstackerrank"));

//using regex
const hackerrank = (s) => {
  let regex =
    /\w*[h]\w*[a]\w*[c]\w*[k]\w*[e]\w*[r]\w*[r]\w*[a]\w*[n]\w*[k]\w*/gi;
  if (regex.test(s)) return "YES";
  else return "NO";
};
console.log(hackerrank("ereiahmstackerrank"));
