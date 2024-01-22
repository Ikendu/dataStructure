const compareTwoObject = (obj1, obj2) => {
  let obj1Props = Object.getOwnPropertyNames(obj1)
  let obj2Props = Object.getOwnPropertyNames(obj2)

  if (obj1Props.length !== obj2Props.length) return false

  for (let i = 0; i < obj1Props.length; i++) {
    let props = obj1Props[i]
    if (obj1[props] !== obj1[props]) return false
  }
  return true
}

console.log(
  { a: 20, ada: `hello`, obi: `come here plz` },
  { a: 20, ada: `hello`, obi: `come here plz` }
)
