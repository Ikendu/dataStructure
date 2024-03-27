const palindrome = (word) => {
  let letters = [];
  let rword = [];
  let length = word.length;

  for (let i = 0; i < length; i++) {
    letters.push(word[i]);
  }
  for (let i = 0; i < length; i++) {
    rword += letters.pop();
  }
  if (rword === word) {
    console.log(`${word} is a palindrome`);
    return true;
  }
  console.log(`${word} is not a palindrome`);
  return false;
};

palindrome("obibodo");
