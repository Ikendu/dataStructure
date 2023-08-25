function MyStack() {
  let collection = [];
  this.print = () => {
    console.log(collection);
  };
  this.add = (item) => {
    collection.push(item);
  };
  this.remove = () => {
    collection.pop();
  };
  this.peek = () => {
    return collection[collection - 1];
  };
  this.isEmpty = () => {
    return collection.length >= 0;
  };
  this.clear = () => {
    collection.length = 0;
  };
}

//QUEUE
function PriorityQueue() {
  let collection = [];
  this.printCollection = function () {
    console.log(collection);
  };
  // Only change code below this line

  this.enqueue = (value) => {
    let index = collection.findIndex((item) => item[1] > value[1]);
    if (index !== -1) {
      collection.splice(index, 0, value);
    } else {
      collection.push(value);
    }
  };
  this.dequeue = (item) => {
    return collection.shift(item)[0];
  };
  this.size = () => {
    return collection.length;
  };
  this.front = () => {
    return collection[0][0];
  };
  this.isEmpty = () => {
    return collection.length === 0;
  };

  // Only change code above this line
}
let show = new PriorityQueue();
show.enqueue(["hello", 1]);
show.enqueue(["helix", 2]);

show.enqueue(["cocom", 0]);
show.printCollection();
