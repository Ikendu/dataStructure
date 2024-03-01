function Node(element) {
  this.element = element;
  this.next = null;
}

function LinkList() {
  this.head = new Node("first");
  this.display = display;
  this.insert = insert;
  this.remove = remove;
  this.traverse = traverse;
}
