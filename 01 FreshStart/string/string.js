//Some string operations

//charAt
let item = "big house";
console.log(item[1]);
console.log(item[5]);
console.log(item[0]);
console.log(item.charAt(7));

//substring
console.log(item.substring(1, 6));
console.log("add" < "ab");

console.log("hello good morning".indexOf("m", 7)); //7 is optional
console.log("hello good morning".indexOf("hello", 7));
console.log("hello good morning".indexOf("good"));

function countString(string, data) {
  let count = 0;
  let pos = string.indexOf(data);

  while (pos !== -1) {
    count++;
    pos = string.indexOf(data, pos + 1);
  }
  return count;
}

//test
var str =
  "He's my king from this day until his last day because he is a man of good will, a grower and a developer";
console.log(countString(str, "a"));

console.log("he is my king".startsWith("he"));
console.log("he is my king".endsWith("king"));
let newStr = str.replace("king", "president");
console.log(newStr);
let moreStr = str.replace("He", "Younglife");
console.log(moreStr);
