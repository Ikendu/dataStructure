const special = (arr) => {
  for (let i of arr) {
    let count = 0;
    for (let j = 0; i < arr.length; i++) {
      if (i <= arr[j]) count++;
    }
    newA.push(count, i);
  }
  console.log(newA);
};
console.log(special());
