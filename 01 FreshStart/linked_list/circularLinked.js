function Node(element) {
  this.element = element;
  this.next = null;
}

function CircleLink() {
  this.head = new Node(`head`);
  this.head.next = this.head;
  this.insert = insert;
  this.display = display;
  this.find = find;
  this.remove = remove;
  this.circlerTurn = circlerTurn;
}

function find(item) {
  let currNode = this.head;
  while (currNode.element != item) {
    currNode = currNode.next;
  }
  return currNode;
}

function insert(element, item) {
  let newNode = new Node(element);
  let findItem = this.find(item);

  if (findItem.next != null) {
    newNode.next = findItem.next;
    findItem.next = newNode;
  }
}

function display() {
  let currNode = this.head;

  while (currNode.next != null && currNode.next.element != "head") {
    console.log(currNode.element);
    currNode = currNode.next;
  }
}

//project
function circlerTurn(n, m) {
  // let currNode = new Node('head')
}
