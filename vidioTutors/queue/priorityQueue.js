//priority queue can be implemented as an array of arrays
function priority(store, item) {
  let added = false;

  for (let i = 0; i < store.length; i++) {
    if (item[1] < store[i][1]) {
      store.splice(i, 0, item);
      added = true;
      return store;
    }
  }
  if (!added) store.push(item);
  return store;
}
function size(store) {
  return store.length;
}
function isEmpty(store) {
  return store.length === 0;
}
function front(store) {
  return store[0];
}

let pQueue = [];
let newQueue = priority(pQueue, ["Helen", 3]);
newQueue = priority(pQueue, ["Victor", 5]);
newQueue = priority(pQueue, ["Bella", 6]);
newQueue = priority(pQueue, ["Akuoma", 1]);
newQueue = priority(pQueue, ["Gift", 2]);
newQueue = priority(pQueue, ["David", 3]);
newQueue = priority(pQueue, ["Ekene", 4]);
console.log(newQueue);
console.log(isEmpty(pQueue));
console.log(size(pQueue));
console.log(front(pQueue));
