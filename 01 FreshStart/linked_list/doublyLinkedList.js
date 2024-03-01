//double Linked List

function Node(element) {
  this.element = element;
  this.next = null;
  this.prev = null;
}

function DoubleLinked() {
  this.head = new Node("head");
  this.find = find;
  this.insert = insert;
  this.display = display;
  this.remove = remove;
  this.findLast = findLast;
  this.displayRev = displayRev;
}

function find(item) {
  let currNode = this.head;

  while (currNode.element != item) {
    currNode = currNode.next;
  }
  return currNode;
}

function insert(element, item) {
  let newEle = new Node(element);
  let findNode = this.find(item);

  newEle.next = findNode.next;
  newEle.prev = findNode;
  findNode.next = newEle;

  return "Done";
}

function display() {
  let currNode = this.head;

  while (currNode.next != null) {
    console.log(currNode.next.element);
    currNode = currNode.next;
  }
}

function remove(element) {
  let ele = this.find(element);

  if (ele.next != null) {
    ele.prev.next = ele.next;
    ele.next.prev = ele.prev;
    ele.next = null;
    ele.prev = null;
  }
  return "Done";
}

function findLast() {
  let currNode = this.head;

  while (currNode.next != null) {
    currNode = currNode.next;
  }
  return currNode;
}

function displayRev() {
  //let currNode = this.head;
  let currNode = this.findLast();

  while (currNode.prev != null) {
    console.log(currNode.element);
    currNode = currNode.prev;
  }
}

let cities = new DoubleLinked();
cities.insert("Enugu", "head");
cities.insert("Imo", "Enugu");
cities.insert("Lagos", "Enugu");
cities.insert("Ibadan", "Imo");
cities.remove("Enugu");

cities.display();
cities.displayRev();
