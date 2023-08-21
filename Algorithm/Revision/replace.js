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
