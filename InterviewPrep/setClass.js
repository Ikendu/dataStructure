class Set {
  constructor() {
    this.collection = {};
    this.length = {};
  }
  //get the values
  value() {
    return Object.values(this.collection);
  }
  has() {
    return collection[element] !== undefined;
  }
  print() {
    return collection;
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
}
