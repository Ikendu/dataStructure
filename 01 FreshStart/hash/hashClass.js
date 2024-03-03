function Hash() {
  this.table = new Array(137);
  this.hashfunc = hashfunc;
  this.betterHash = betterHash;
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

function insert(data) {
  let pos = this.hashfunc(data);
  if (this.table[pos]) return (this.table[++pos] = data);
  else return (this.table[pos] = data);
}

function display() {
  for (let i = 0; i < this.table.length; i++) {
    if (this.table[i]) {
      console.log(i + " --> " + this.table[i]);
    }
  }
}

function betterHash(data) {
  let total = 0;
  const HB = 37;

  for (let i = 0; i < data.length; i++) {
    total += HB * data.charCodeAt(i);
  }
  total = total % this.table.length;

  if (total < 0) {
    total += this.table.length - 1;
  }
  //   console.log(total + " to " + data);
  return parseInt(total);
}

let hasher = new Hash();
hasher.insert("Helen");
hasher.insert("Major");
hasher.insert("Hero");
var someNames = [
  "David",
  "Jennifer",
  "Donnie",
  "Raymond",
  "Cynthia",
  "Mike",
  "Clayton",
  "Danny",
  "Jonathan",
];
for (let i = 0; i < someNames.length; i++) {
  hasher.insert(someNames[i]);
}
hasher.display();

console.log(hasher.hashfunc("boy"));
