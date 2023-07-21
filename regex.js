const myString =
  "I am becoming a skillful option programmer, Now I can do more programming I can do 1, 2, 3, 4 to 9";
const myregex = /skillful/i; //.........i to match upper and lower case
const aregex = /program/gi; //..........g to match more than one
const moregex = /[a-z0-9]/gi; //........match all alphabets and numbers
const shortHand = /\w/gi; //............match all characters and numbers shorthand
const shortHand2 = /\W/g; //............match all non-alphanumeric shorthand
const findMore = /m+/gi; //.............match one or more times
const zeroOrMore = /am*/gi; //.......... * to match zero or more times
const negate = /[^sop]/gi; //...........^ things that will not be matched
const numeric = /\d/g; //................match all digits

const username = /^[a-z][a-z]+\d*$|^[a-z]+\d\d+$/i; //username must start with a letter and end
// with a digit, the first two must be a letter, it can be upper or lower case, if it contains
// only one letter it must be accompanied with two numbers

const result = myregex.test(myString);
const output = myString.match(myregex);
const output2 = myString.match(aregex);
const output3 = myString.match(findMore);
const output4 = myString.match(zeroOrMore);
const output5 = myString.match(shortHand2);
// console.log(result);
// console.log(output);
// console.log(output2);
// console.log(myString.match(moregex));
console.log(output5);
