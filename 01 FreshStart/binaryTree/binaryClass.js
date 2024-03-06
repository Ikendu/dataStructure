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

let bstree = new BST();
bstree.insert(23);
bstree.insert(64);
bstree.insert(12);
bstree.insert(78);

bstree.inorder(bstree.root);
bstree.preOrder(bstree.root);
