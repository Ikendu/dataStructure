const myString =
  "I am becoming a skillful option programmer, Now I can do more programming I can do 1, 2, 3, 4 to 9";
const myregex = /skillful/i;
const aregex = /program/gi;
const moregex = /[a-z0-9]/gi;

const result = myregex.test(myString);
const output = myString.match(myregex);
const output2 = myString.match(aregex);
console.log(result);
console.log(output);
console.log(output2);
console.log(myString.match(moregex));
