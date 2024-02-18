//using indexOf method to check upper case
const myReplace = (sentence, word, replacer) => {
  let index = sentence.indexOf(word);

  if (sentence[index] === sentence[index].toUpperCase()) {
    replacer = replacer.charAt(0).toUpperCase() + replacer.slice(1);
  } else {
    replacer = replacer.charAt(0).toLowerCase() + replacer.slice(1);
  }

  return sentence.replace(word, replacer);
};
console.log(
  myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped")
);

//using regex to check

//using regex to check for uppercase
const myReplacer = (str, word, replacer) => {
  if (word.match(/[a-z]/)) {
    replacer = replacer.charAt(0).toUpperCase() + replacer.slice(1);
  } else {
    replacer = replacer.charAt(0).toLowerCase() + replacer.slice(1);
  }
  return str.replace(word, replacer);
};
console.log(
  myReplacer("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped")
);

//using array index
const wordReplace = (str, word, replacer) => {
  if (word[0] === word[0].toUpperCase()) {
    replacer = replacer.replace(replacer[0], replacer[0].toUpperCase());
  }
  return str.replace(word, replacer);
};
console.log(
  wordReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped")
);
