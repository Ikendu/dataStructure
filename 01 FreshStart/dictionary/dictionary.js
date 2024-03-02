function Dictionary() {
  this.dataStore = new Array();
  this.add = add;
  this.remove = remove;
  this.clearAll = clearAll;
  this.find = find;
  this.showAll = showAll;
}

function add(key, value) {
  this.dataStore[key] = value;
}

function find(key) {
  return this.dataStore[key];
}

function remove(key) {
  delete this.dataStore[key];
}

function clearAll() {
  return (this.dataStore = []);
}

function showAll() {
  for (let key in this.dataStore) {
    console.log(`${key} has the value of ${this.dataStore[key]}`);
  }
}

let names = new Dictionary();

names.add("added", "Cynthia");
names.add("remover", "David");
names.add("loader", "Akuoma");
names.add("namer", "Awkama");

names.showAll();
console.log(names.find("loader"));

const dictionary = (string) => {
  let dict = {};
  string = string.split(" ");

  for (let key of string) {
    if (dict[key]) dict[key]++;
    else {
      dict[key] = 1;
    }
  }
  return dict;
};
console.log(
  dictionary("the brown fox jumped over the blue fox fox jumped over")
);
