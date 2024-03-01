function Node(element) {
  this.element = element;
  this.next = null;
}

function LinkedList() {
  this.head = new Node("head");
  this.find = find;
  this.insert = insert;
  this.display = display;
  this.findPrev = findPrev;
  this.remove = remove;
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
  while ((currNode.next != null) && (currNode.next.element != item)) {
    currNode = currNode.next
  }
  return currNode;
}

function remove(item) {
  let prev = this.findPrev(item);

  while (prev.next != null) {
    prev.next = prev.next.next;
  }
}

let cities = new LinkedList()
cities.insert(`Enugu`, `head`)
cities.insert(`Aba`, `Enugu`)
cities.insert(`Agu`, `Aba`)
cities.insert(`Ebonyi`, `Aba`)
cities.insert(`Ihuma`, `Enugu`)
cities.display() 
console.log(`-----------------------`)
cities.remove(`Agu`)
cities.display()