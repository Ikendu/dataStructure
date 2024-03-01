function Node(element) {
  this.element = element;
  this.next = null;
}

function LinkList() {
  this.head = new Node("head");
  this.display = display;
  this.insert = insert;
  this.remove = remove;
  this.find = find;
  this.traverse = traverse;
}

function find(item) {
  let curNode = this.head;

  while (curNode.element != item) {
    curNode = curNode.next;
  }
  return curNode;
}

function insert(element, item) {
  let newNode = new Node(element);
  let findItem = this.find(item);

  newNode.next = findItem.next;
  findItem.next = newNode;
}

function display() {
  let currNode = this.head;

  while (currNode.next != null) {
    console.log(currNode.next.element);
    currNode = currNode.next;
  }
}
