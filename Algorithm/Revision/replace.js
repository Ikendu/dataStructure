//get 'before' from the string and replace it with 'after'
const replacer = (str, before, after) => {
  let pos = str.indexOf(before);
  if (str.charAt(pos) == str.charAt(pos).toUpperCase()) {
    after = after[0].toUpperCase() + after.slice(1);
  } else {
    after = after[0].toLowerCase() + after.slice(1);
  }
  return str.replace(before, after);
};
console.log(
  replacer("A quick brown fox lumped over the lazy dog", "lumped", "Leaped")
);

//without charAt() and indexOf()
const replacer1 = (str, before, after) => {
  if (before[0] == before[0].toUpperCase()) {
    after = after[0].toUpperCase() + after.slice(1);
  } else {
    after = after[0].toLowerCase() + after.slice(1);
  }
  return str.replace(before, after);
};
console.log(
  replacer1("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped")
);

//using substring
const replacer2 = (str, before, after) => {
  let pos = str.indexOf(before);
  if (str[pos] == str[pos].toUpperCase()) {
    after = after.charAt(0).toUpperCase() + after.substring(1);
  } else {
    after = after.charAt(0).toLowerCase() + after.slice(1);
  }
  return str.replace(before, after);
};
console.log(
  replacer2("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped")
);

//using regex
const replacer3 = (str, before, after) => {
  if (/^[A-Z]/.test(before)) {
    after = after[0].toUpperCase() + after.slice(1);
  } else {
    after = after[0].toLowerCase() + after.substring(1);
  }
  return str.replace(before, after);
};
console.log(
  replacer3("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped")
);
