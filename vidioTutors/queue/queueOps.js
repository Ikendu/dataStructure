function Queue() {
  let store = [];
  let count = 0;

  this.length = store.length;
  this.enqueue = function (data) {
    store.push(data);
    count++;
    console.log(store);
    return store;
  };
  this.dequeue = function () {
    store.shift();
    count--;
    console.log(store);
    return store;
  };

  this.front = function () {
    return store[0];
  };
  this.back = function () {
    return store[count - 1];
  };
}

let line = new Queue();
line.enqueue("peter");
line.enqueue("joy");
line.enqueue("magi");
line.enqueue("july");
line.enqueue("aku");
line.dequeue();
console.log(line.front());
console.log(line.back());
