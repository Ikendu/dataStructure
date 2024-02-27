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
