function mySet() {
  this.store = [];

  this.has = function (value) {
    if (this.store.indexOf(value) > -1) return true;
    else return false;
  };

  this.add = function (value) {
    if (!this.has(value)) this.store.push(value);
    else return false;
  };

  this.remove = function (value) {
    if (this.has(value)) {
      let index = this.store.indexOf(value);
      this.store.splice(index, 1);
    }
  };

  this.items = function () {
    return this.store;
  };

  this.union = function (otherSet) {
    let setA = this.store;
    let setB = otherSet.store;
    setB.forEach((item) => {
      if (setA.indexOf(item) < 0) setA.push(item);
    });
    return setA;
  };

  this.intersect = function (setB) {
    let result = new mySet();
    setB.forEach((item) => {
      if (this.store.has(item)) intersect.add(item);
    });
    return result;
  };

  this.difference = function (setB) {
    let result = new mySet();

    setB.forEach((item) => {
      if (!this.store.has(item)) result.add(item);
    });
    return result;
  };
}

let setA = new mySet();
setA.add("a");
setA.add("b");
setA.add("c");
setA.add("d");
setA.add("e");
setA.add("d");
setA.add("f");
setA.remove("c");
console.log(setA.items());
let setB = new mySet();
setB.add("e");
setB.add("f");
setB.add("c");
setB.add("d");
setB.add("e");
setB.add("g");
setB.add("h");
console.log(setB.items());
console.log(setA.union(setB));
