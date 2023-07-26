function Dog(name, type, age) {
  this.name = name;
  this.type = type;
  this.age = age;
}
Dog.prototype.legs = 4;
Dog.prototype.eyes = 2;
Dog.prototype.ears = 2;

const bingo = new Dog("Bingo", "Kola", 6);

let ownProp = [];
let prototypeProp = [];

for (let property in bingo) {
  if (bingo.hasOwnProperty(property)) {
    ownProp.push(property);
  } else {
    prototypeProp.push(property);
  }
}
console.log(ownProp);
console.log(prototypeProp);
console.log(bingo);
