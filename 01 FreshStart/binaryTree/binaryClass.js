function Node(data, left, right) {
  this.data = data;
  this.left = left;
  this.right = right;
  this.show = show;
}
function show() {
  return this.data;
}

function BST() {
  this.insert = insert;
  this.root = null;
  this.inorder = inorder;
  this.preOrder = preOrder;
  this.postOrder = postOrder;
  this.minimum = minimum;
  this.maximum = maximum;
}

function insert(data) {
  let node = new Node(data, null, null);
  if (this.root == null) {
    this.root = node;
  } else {
    let current = this.root;
    let parent;

    while (true) {
      parent = current;
      if (data < current.data) {
        current = current.left;
        if (current == null) {
          parent.left = node;
          break;
        }
      } else {
        current = current.right;
        if (current == null) {
          parent.right = node;
          break;
        }
      }
    }
  }
}

function inorder(node) {
  if (node) {
    inorder(node.left);
    console.log(node.show() + " ");
    inorder(node.right);
  }
}

function preOrder(node) {
  if (node) {
    console.log(node.show() + " ");
    preOrder(node.left);
    preOrder(node.right);
  }
}

function postOrder(node) {
  if (node) {
    postOrder(node.left);
    postOrder(node.right);
    console.log(node.show() + " ");
  }
}

//minimum and maximum value in a BST
//minimumm
function minimum() {
  let current = this.root;
  while (current.left) {
    current = current.left;
  }
  console.log(current.data);
  return current.data;
}
//maximum
function maximum() {
  let current = this.root;
  while (current.right) {
    current = current.right;
  }
  console.log(current.data);
  return current.data;
}

let bstree = new BST();
bstree.insert(23);
bstree.insert(64);
bstree.insert(12);
bstree.insert(78);
bstree.insert(99);
bstree.insert(3);

bstree.inorder(bstree.root);
console.log(".....................");
bstree.preOrder(bstree.root);
console.log(".....................");
postOrder(bstree.root);
console.log(".....................");
bstree.minimum();
console.log(".....................");
bstree.maximum();
