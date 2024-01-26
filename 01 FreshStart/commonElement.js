const commonElements = (...arrays) => {
  let hashmap = []
  let last = null
  let ans = []
  for (let i = 0; i < arrays.length; i++) {
    let currArray = arrays[i]
    for (let j = 0; j < currArray.length; j++) {
      let currElement = currArray[j]
      if (currElement != last) {
        if (!hashmap[currElement]) {
          hashmap[currElement] = 1
        } else {
          hashmap[currElement]++
        }
      }
      last = currElement
    }
  }
  for (let prop in hashmap) {
    if (hashmap[prop] == arrays.length) {
      ans.push(prop)
    }
  }
  return ans
}
console.log(commonElements([1, 2, 2, 4, 6, 7], [4, 5, 6, 1, 2, 2], [5, 4, 1, 2, 8]))
