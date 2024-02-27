const fs = require("node:fs");

function Queue() {
  this.queueStore = [];
  this.enqueue = enqueue;
  this.dequeue = dequeue;
  this.count = count;
  this.front = front;
  this.back = back;
  this.print = print;
}

function enqueue(item) {
  this.queueStore.push(item);
}
function dequeue(item) {
  this.dequeue.shift();
}
function count() {
  return this.queueStore.length;
}
function front() {
  return this.queueStore[0];
}
function back() {
  return this.queueStore[this.queueStore.length - 1];
}
function print() {
  let readings = "";
  for (let i = 0; i < queueStore.length; i++) {
    readings += queueStore + "\n";
  }
  return readings;
}

let dancers = fs.readFileSync("items.txt", "utf8").split("\r\n");
console.log(dancers);

const dancer = (name, sex) => {
  return { name, sex };
};

let males = [];
let females = [];

const getDancers = (male, female) => {
  for (let i = 0; i < dancers.length; i++) {
    let newDancer = dancers[i].split(" ");
    let sex = newDancer[0];
    let name = newDancer[1];
    if (sex == "M") male.push({ name, sex });
    else female.push({ name, sex });
  }
};
getDancers(males, females);
console.log(males);
console.log(females);

const callDancers = (males, females) => {
  let male = males.shift();
  let female = females.shift();

  return { male, female };
};
console.log("first set dancers...");
console.log(callDancers(males, females));
console.log("second set dancers...");
console.log(callDancers(males, females));
console.log("third set dancers...");
console.log(callDancers(males, females));
console.log("fourth set dancers...");
console.log(callDancers(males, females));
console.log("fifth set dancers...");
console.log(callDancers(males, females));
console.log("sixth set dancers...");
console.log(callDancers(males, females));
