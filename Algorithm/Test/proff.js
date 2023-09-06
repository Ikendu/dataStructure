function angryProfessor(k, a) {
  // Write your code here
  let ontime = 0;
  for (let i = 0; i <= a.length; i++) {
    if (a[i] <= 0) ontime++;
  }
  console.log(ontime);
  if (ontime >= k) return "NO";
  else return "YES";
}
console.log(angryProfessor(3, [-1, -3, 0, 0, 4, 2]));
