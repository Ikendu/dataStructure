function mySet() {
  let store = [];

  this.items = function () {
    return store;
  };

  this.has = function (value) {
    return store.indexOf(value) !== -1;
  };

  this.add = function (value) {
    if (!this.has(value)) store.push(value);
    else return false;
  };

  this.remove = function (value) {
    if (this.has(value)) {
      let index = store.indexOf(value);
      store.splice(index, 1);
    }
  };

  this.union = function (otherSet) {
    let unionSet = new mySet();

    store.forEach((e) => {
      unionSet.add(e);
    });
    otherSet.items().forEach((item) => {
      unionSet.add(item);
    });
    return unionSet;
  };

  this.intersect = function (otherSet) {
    let result = new mySet();

    store.forEach((item) => {
      if (otherSet.has(item)) {
        result.add(item);
      }
    });
    return result;
  };

  this.difference = function (otherSet) {
    let result = new mySet();

    otherSet.items().forEach((item) => {
      if (!this.has(item)) result.add(item);
    });
    return result;
  };

  this.subset = function (otherSet) {
    return otherSet.items().every((e) => {
      return this.has(e);
    });
  };
}

var setA = new mySet();
setA.add("a");
setA.add("b");
setA.add("c");
setA.add("d");
setA.add("e");
setA.add("d");
setA.add("f");
// setA.remove("b");
console.log(setA.items());

var setB = new mySet();
setB.add("e");
setB.add("f");
setB.add("c");
setB.add("d");
setB.add("e");
// setB.add("g");
// setB.add("h");
console.log(setB.items());

console.log(setA.union(setB).items());
console.log(setA.intersect(setB).items());
console.log(setA.difference(setB).items());
console.log(setA.subset(setB));
