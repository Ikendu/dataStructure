var Stack = function () {
  this.count = 0;
  this.store = {};

  this.push = function (value) {
    this.store[this.count] = value;
    this.count++;
  };

  this.pop = function () {
    if (this.count === 0) return;
    this.count--;
    let result = this.store[this.count];
    delete this.store[this.count];

    console.log("Pop off", result.toUpperCase());
    return result;
  };

  this.remains = function () {
    console.log(this.store);
    return this.store;
  };

  this.size = function () {
    console.log(this.size);
    return this.size;
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
