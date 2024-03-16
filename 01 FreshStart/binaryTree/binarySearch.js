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
  this.findMax = findMax;
  this.findValue = findValue;
  this.remove = remove;
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

//FIND THE MAXIMUM DATA
function findMax() {
  let current = this.root;
  while (current.right) {
    current = current.right;
  }
  console.log(current.data);
  return current.data;
}

function findValue(data) {
  let current = this.root;
  while (current.data != data) {
    if (data < current.data) {
      current = current.left;
    } else {
      current = current.right;
    }
    if (current == null) {
      console.log("Not found");
      return "Not found";
    }
  }
  console.log(current.data);
  return current.data;
}

//REMOVE DATA
function getSmallest(current) {
  // let current = this.root;
  while (current.left !== null) {
    current = current.left;
  }
  console.log(current.data);
  return current.data;
}

function remove(data) {
  root = removeNode(this.root, data);
}
function removeNode(node, data) {
  if (node == null) return null;
  if (data == node.data) {
    if (node.left == null && node.right == null) return null;
    if (node.left == null) return node.right;
    if (node.right == null) return node.left;
    let tempNode = getSmallest(node.right);
    tempNode.data = node.data;
    node.right = removeNode(node.right, tempNode.data);
    return node;
  } else if (data < node.data) {
    node.left = removeNode(node.left, data);
    return node;
  } else {
    node.right = removeNode(node.right, data);
    return node;
  }
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
console.log("Get the maximum value....");
students.findMax();
console.log("Find a value.............");
students.findValue("Okoro");
students.findValue("Ekemaa");
console.log("Test RemoveNode..........");
console.log(students.remove("Hero"));
