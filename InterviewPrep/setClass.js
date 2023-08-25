class Set {
  constructor() {
    this.collection = {};
    this.length = 0;
  }
  //get the values
  values() {
    return Object.values(this.collection);
  }
  has(element) {
    return this.collection[element] !== undefined;
  }
  print() {
    return this.collection;
  }
  add(element) {
    if (!this.has(element)) {
      this.collection[element] = element;
      this.length++;
      return true;
    } else {
      return false;
    }
  }
  remove(element) {
    if (this.collection[element]) {
      delete this.collection[element];
      length--;
      return true;
    } else {
      return false;
    }
  }
  size(element) {
    return this.length;
  }
  union(setB) {
    let newSet = new Set();
    let helper = (ele) => newSet.add(ele);

    this.values.map(helper);
    setB.map(helper);
  }
}
let mySet = new Set();
mySet.add(2);
mySet.add(3);
let arr = Object.values(mySet);
console.log(arr);
console.log(mySet);
