const updater = (arr1, arr2) => {
  arr1.map((item1, index1, arr1) => {
    arr2.map((item2, index2, arr2) => {
      if (item1[1] === item2[1]) {
        item1[0] += item2[0];
        arr2.splice(index2, 1);
      }
    });
  });
  return [...arr1, ...arr2].sort((a, b) =>
    a[1] == b[1] ? 0 : a[1] > b[1] ? 1 : -1
  );
};
var curInv = [
  [21, "Bowling Ball"],
  [2, "Dirty Sock"],
  [1, "Hair Pin"],
  [5, "Microphone"],
];

var newInv = [
  [2, "Hair Pin"],
  [3, "Half-Eaten Apple"],
  [67, "Bowling Ball"],
  [7, "Toothpaste"],
];

console.log(updater(curInv, newInv));
