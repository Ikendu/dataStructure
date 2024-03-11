function Node(data, left, right) {
  this.right = right;
  this.left = left;
  this.data = data;
  this.show = show;
}

function show() {
  return this.data;
}

function BST() {
  this.insert = insert;
  this.root = null;
  this.inorder = inorder;
  this.findMin = findMin;
}

function insert(data) {
  let node = new Node(data, null, null);
  if (this.root == null) this.root = node;
  else {
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
  if (node != null) {
    inorder(node.left);
    console.log(node.show() + " ");
    inorder(node.right);
  }
}

function preOrder(node) {
  if (node != null) {
    console.log(node.show() + " ");
    preOrder(node.left);
    preOrder(node.right);
  }
}

function postorder(node) {
  if (node != null) {
    postorder(node.left);
    postorder(node.right);
    console.log(node.show() + " ");
  }
}

//FIND THE MINIMUM DATA
function findMin() {
  let current = this.root;
  while (current.left !== null) {
    current = current.left;
  }
  console.log(current.data);
  return current.data;
}

let students = new BST();
students.insert("Ada");
students.insert("Obi");
students.insert("Ekema");
students.insert("Okoro");
students.insert("Ebere");
students.insert("Hero");
console.log("inorder.............");
inorder(students.root);
console.log("preorder..............");
preOrder(students.root);
console.log("postorder...............");
postorder(students.root);
console.log("Get the minimum..........");
students.findMin();
