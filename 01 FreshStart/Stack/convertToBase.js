const convertToBase = (num, base) => {
  let remStore = [];
  let ans = ``;
  let checker = [];
  while (num > 0) {
    remStore.push(num % base);
    num = Math.floor((num /= base));
  }
  while (remStore.length > 0) {
    ans += remStore.pop();
  }
  // for(let i = remStore.length-1; i >= 0; i--){
  //     checker.push(remStore.pop())
  // }
  console.log(ans, checker);
};

console.log(convertToBase(845, 2));
console.log(convertToBase(32, 2));
