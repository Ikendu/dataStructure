//normal recursive fibo
function fibo(num) {
  if (num < 2) return num;
  else return fibo(num - 1) + fibo(num - 2);
}

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
//Another form of dynamic recursive calculation
function fiboDyna(num) {
  let last = 1;
  let last2 = 1;
  for (let i = 2; i < num; i++) {
    result = last + last2;
    last2 = last;
    last = result;
  }
  return result;
}
//measuring time difference in using dynamic programming and recursion

// let start = new Date().getTime();
// console.log(fibo(40));
// let end = new Date().getTime();
// console.log(end - start);

let start = new Date().getTime();
// console.log(fiboD(40000));
console.log(fiboDyna(30));
let end = new Date().getTime();
console.log(end - start);
