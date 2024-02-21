//Stack operations
function Stack(){
    this.dataStore = []
    this.top = 0
    this.push = push
    this.pop = pop
    this.peek = peek
    this.clear = clear
    this.length = length
}
function push(item){
    this.dataStore[this.top] = item
    this.top++ 
}function pop(){
    return this.dataStore[--this.top]
}
function peek(){
    return this.top-1
}
function clear(){
    this.top = 0
    return dataStore = []

}
function length(){
    return this.top
}
