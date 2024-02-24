function Stack(){
    this.stackStore = []
    this.top = 0
    this.push = push
    this.pop = pop
    this.peek = peek
    this.length = length
    this.clear = clear
}
function push(item){
    this.stackStore[this.top++] = item
}
function pop(){
    this.stackStore[this.top--]
}
function peek(){
    return this.stackStore[this.top-1]
}
function clear(){
    this.top = 0
}
function length(){
    return this.top
}

//implementation
const someItem = new Stack()
someItem.push(`Biscuit`  )
someItem.push(  `Groundnut`)
someItem.push( `Water`)
someItem.push( `Ikenga`)
someItem.push( `Amadioha`)
someItem.pop()
//someItem.clear()
console.log(someItem.peek())
console.log(someItem.length())