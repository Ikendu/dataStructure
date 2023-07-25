//using for loop to get through all the string to check
const checkInput = (arr) => {
  let main = arr[0].toLowerCase();
  let test = arr[1].toLowerCase();

  for (let i = 0; i < test.length; i++) {
    if (main.indexOf(test) === -1) return false;
  }
  return true;
};
console.log(checkInput(["ManboyI", "boyi"]));

const testAdjacent = (arr) => {
  let main = arr[0].toLowerCase();
  let test = arr[1].toLowerCase();

  return test.split("").every((letter) => main.indexOf(letter) !== -1);
};
console.log(testAdjacent(["ManboyI", "boyi"]));
