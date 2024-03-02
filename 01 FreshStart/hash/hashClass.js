function Hash() {
  this.table = new Array(137);
  this.hashfunc = hashfunc;
  this.display = display;
  this.insert = insert;
  //   this.get = get;
}

function hashfunc(data) {
  let total = 0;
  for (let i = 0; i < data.length; i++) {
    total += data.charCodeAt(i);
  }
  return total % this.table.length;
}

function insert(data) {}

function display() {
  for (let i = 0; i < this.table.length; i++) {
    if (this.table[i]) {
      console.log(i + "-->" + this.table[i]);
    }
  }
}

let hasher = new Hash();

console.log(hasher.hashfunc("boy"));
