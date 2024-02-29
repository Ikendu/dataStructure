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
  for (let i = 0; i < this.queueStore.length; i++) {
    readings += this.queueStore + "\n";
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

//priority queue
function Patient(name, code){
  this.name = name
  this.code = code
}

function dequeue(){
  let priority = this.queueStore[0].code
  
  for(let i = 0; i < this.queueStore.length; i++){
    if(priority < this.queueStore[i].code) {
      priority = i
    }
    return this.queueStore.splice(priority, 1)
  }
}

let ed = new Queue()
let p = new Patient(`Chigbo`, 3)
ed.enqueue(p)
console.log(ed.print())
