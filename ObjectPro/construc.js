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
let checker = Object.prototype.isPrototypeOf(Dog.prototype);
console.log(ownProp);
console.log(prototypeProp);
console.log(bingo);
console.log(checker);

//Dont repeat yourself
function Animal() {}
function Dogs() {}
function Birds() {}

Dogs.prototype = Object.create(Animal.prototype);
Birds.prototype = Object.create(Animal.prototype);

Dogs.prototype.constructor = Dogs;
Birds.prototype.constructor = Birds;

let bingola = new Dogs();
let duck = new Birds();

console.log(bingola.constructor);
console.log(duck.constructor);
