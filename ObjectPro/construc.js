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

//Dont repeat yourself (inheritance)
function Animal() {}
function Dogs() {}

function Birds(name) {
  this.name = name;
}

Animal.prototype.eyes = () => {
  console.log("I have two eyes");
};

Dogs.prototype = Object.create(Animal.prototype);
Birds.prototype = Object.create(Animal.prototype);

Dogs.prototype.constructor = Dogs;
Birds.prototype.constructor = Birds;

Dogs.prototype.legs = 4;
Dogs.prototype.sound = () => {
  console.log("Woof! Woof!!");
};

Birds.prototype.legs = (name) => {
  console.log(name + " have two legs");
};
//overiding eyes method
Birds.prototype.eyes = (name) => {
  console.log(name + " have two blue eye");
};

let bingola = new Dogs();
let duck = new Birds();
bingola.sound();
bingola.eyes();
duck.eyes("Igbo-birds");
duck.legs("Fine-duke");

console.log(bingola.constructor);
console.log(duck.constructor);
