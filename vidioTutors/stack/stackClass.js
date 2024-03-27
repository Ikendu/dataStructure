var Stack = function () {
  this.count = 0;
  this.store = {};

  this.push = function (value) {
    this.store[this.count] = value;
    this.count++;
  };

  this.pop = function () {
    this.count--;
    delete this.store[this.count];
    return this.store;
  };

  this.remains = function () {
    console.log(this.store);
    return this.store;
  };
  this.peek = function () {
    console.log(this.store[this.count - 1]);
    return this.store[this.count - 1];
  };
};

let stack = new Stack();
stack.push("hello");
stack.push("come");
stack.push("around");
stack.push("soon");
stack.remains();
stack.pop();
stack.remains();
stack.peek();
