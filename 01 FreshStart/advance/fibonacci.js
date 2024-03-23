//normal recursive fibo
function fibo(num) {
  if (num < 2) return num;
  else return fibo(num - 1) + fibo(num - 2);
}

console.log(fibo(31));

//using dynamic programming
function fiboD(num) {
  if (num < 2) return 1;
  let store = [];
  for (let i = 0; i < num; i++) {
    store[i] = 0;
  }
  store[1] = 1;
  store[2] = 1;
  for (let i = 3; i <= num; i++) {
    store[i] = store[i - 1] + store[i - 2];
  }
  return store;
}
console.log(fiboD(2));
