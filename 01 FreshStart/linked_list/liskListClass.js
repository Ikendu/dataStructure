function Node(element) {
  this.element = element;
  this.next = next;
}

function LinkedList() {
  this.head = new Node("head");
  this.find = find;
  this.insert = insert;
  this.display = dispay;
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
  let currNode = this.head;
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
