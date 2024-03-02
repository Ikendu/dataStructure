function Node(element) {
  this.element = element;
  this.next = null;
}

function LinkedList() {
  this.head = new Node("head");
  this.pos = 0;
  this.find = find;
  this.insert = insert;
  this.display = display;
  this.findPrev = findPrev;
  this.remove = remove;
  this.advance = advance;
  this.moveBack = moveBack;
  this.show = show;
}

function find(item) {
  let newNode = this.head;

  while (newNode.element != item) {
    newNode = newNode.next;
  }
  return newNode;
}

function insert(element, node) {
  let currNode = this.find(node);
  let insertNode = new Node(element);

  insertNode.next = currNode.next;
  currNode.next = insertNode;
}

function display() {
  let currNode = this.head;

  while (currNode.next != null) {
    console.log(currNode.next.element);
    currNode = currNode.next;
  }
}

function findPrev(item) {
  let currNode = this.head;
  while (currNode.next != null && currNode.next.element != item) {
    currNode = currNode.next;
  }
  return currNode;
}

function remove(item) {
  let prev = this.findPrev(item);

  while (prev.next != null) {
    prev.next = prev.next.next;
  }
}
function curPos() {
  return this.pos;
}

function advance(num) {
  let currNode = this.head;
  let counter = 0;
  while (currNode.next != null && counter < num) {
    currNode = currNode.next;
    counter++;
    this.pos++;
  }
  return currNode.element;
}

function show() {
  let count = 0;
  let currNode = this.head;

  while (count != this.pos) {
    currNode = currNode.next;
    count++;
  }
  return currNode.element;
}

function moveBack(num) {
  let currNode = this.advance(this.pos);
  let counter = 0;

  return currNode;
}

let cities = new LinkedList();
cities.insert(`Enugu`, `head`);
cities.insert(`Aba`, `Enugu`);
cities.insert(`Agu`, `Aba`);
cities.insert(`Ebonyi`, `Aba`);
cities.insert(`Ihuma`, `Enugu`);
cities.insert(`Ikere`, `Ebonyi`);

cities.display();
console.log(`-----------------------`);
cities.remove(`Agu`);
cities.display();

console.log(`------------------------`);
console.log(cities.advance(2));
console.log(cities.show());
// console.log(cities.moveBack());
console.log(cities.pos);
