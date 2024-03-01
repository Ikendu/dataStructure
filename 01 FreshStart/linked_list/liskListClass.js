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
