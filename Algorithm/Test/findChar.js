const getChar = (h, word) => {
  let newA = [];
  let char = "abcdefghijklmnopqrstuvwxyz";
  for (let i in char) {
    for (let j in word) {
      if (char[i] == word[j]) newA.push(h[i]);
    }
  }
  //get the highest digit
  let max = Math.max(...newA);
  return max * newA.length;
};
console.log(
  getChar(
    [
      1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
      7,
    ],
    ["z", "a", "d", "a"]
  )
);

//better solution

const charArea = (h, word) => {
  let max = 0;
  for (let i in word) {
    char = word[i].charCodeAt() - 97;

    if (h[char] > max) max = h[char];
  }
  return max * word.length;
};
console.log(
  charArea(
    [
      1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
      7,
    ],
    ["h", "a", "d", "a"]
  )
);
