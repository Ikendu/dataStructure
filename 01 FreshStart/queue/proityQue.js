let patients = [
  { name: "Helen", level: 3 },
  { name: "Emeka", level: 4 },
  { name: "Constant", level: 1 },
  { name: "Vera", level: 2 },
  { name: "Okama", level: 7 },
  { name: "Vidoka", level: 5 },
];

const priority = (array) => {
  let priority = array[0].level;

  for (let i = 1; i < array.length; i++) {
    if (array[i].level < priority) {
      priority = i;
    }
  }
  return array.splice(priority, 1);
};

console.log(priority(patients));
console.log(priority(patients));
console.log(priority(patients));
console.log(priority(patients));
console.log(priority(patients));
console.log(priority(patients));
