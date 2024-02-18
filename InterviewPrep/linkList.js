const LinkedList = () => {
  var head = null;
  var length = 0;

  var Node = function (element) {
    this.element = element;
    this.next = null;
  };
  this.size = function () {
    return length;
  };
  this.head = function () {
    return head;
  };
  this.add = (element) => {
    let node = new Node(element);
    if (head) {
      let curr = head;
      while (curr.next) {
        curr = curr.next;
      }
      curr.next = node;
    } else {
      head = node;
    }
    length++;
  };
  this.remove = (element) => {
    if (head.element === element) {
      head = head.next;
      length--;
    }
    let prev = head;
    while (prev) {
      let curr = prev.next;
      if (curr) {
        if (curr.element == element) {
          prev.next = curr.next;
          length--;
        }
      }
      prev = curr;
    }
  };
};
