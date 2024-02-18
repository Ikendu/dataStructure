function hurdleRace(k, height) {
  let arr = Math.max(...height);
  //let arr = height.sort((a, b) => b - a)
  if (k > arr) return 0;
  return arr - k;
}
console.log(hurdleRace(3, [1, 6, 3, 5, 2]));
