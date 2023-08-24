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
