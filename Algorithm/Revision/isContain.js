//check if str2 is contained in str1 of the same array
//returns true is present
const isContain = (arr) => {
  let str1 = arr[0].toLowerCase();
  let str2 = arr[1].toLowerCase();

  for (let i = 0; i < str2.length; i++) {
    if (str1.indexOf(str2[i]) < 0) {
      return false;
    }
  }
  return true;
};
console.log(isContain(["Hello", "hey"]));
