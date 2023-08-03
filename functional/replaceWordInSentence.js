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
const myReplacer = (sentence, word, replacer) => {
    if (word.match(/^[A-Z]/))
}

//using regex to check for uppercase
const myReplace = (str, word, replacer) => {
	if(word.match(/[a-z]/)){
		replacer = replacer.charAt(0).toUpperCase() + replacer.slice(1)
	} else {
		replacer = replacer.charAt(0).toLowerCase() + replacer.slice(1)
	}
	return str.replace(word, replacer)
}
console.log(myReplace("A quick brown fox Jumped over the lazy dog",
 "Jumped", "leaped"));