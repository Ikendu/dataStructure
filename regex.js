const myString = "I am becoming a skillful option programmer";
const myregex = /skillful/i;

const result = myregex.test(myString);
const output = myString.match(myregex);
console.log(result);
console.log(output);
