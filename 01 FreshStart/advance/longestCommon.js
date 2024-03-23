//using brute force solution

function common(stringA, stringB) {
  let store = [];
  for (let i = 0; i < stringA.length; i++) {
    for (let j = 0; j < stringB.length; j++) {
      if (stringA[i] == stringB[j] && store.indexOf(stringB[j]) < 0) {
        store.push(stringB[j]);
      }
    }
  }
  return store;
}
console.log(common("coming", "going"));
console.log(common("raven", "havoc"));
