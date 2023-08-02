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
