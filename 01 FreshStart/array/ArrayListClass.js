function List(){
    this.listStore = []
    this.size = 0
    this.pos = 0
    this.append = appendOne
    this.curr = currPos
    this.clear = clearAll
    this.find = findItem
    this.display = display
    this.insert = insertEle
    this.remove = removeEle
    this.front = frontEle
    this.end = endEle
    this.prev = prevEle
    this.length = length
    this.moveTo = moveToPos
    this.getElement = getElement
    this.contains = contains
}

function appendOne(ele){
    this.listStore.push(ele)
    size++
}
//OR 
function appendOne1(ele){
    this.listStore[size++] = ele
} 
function currPos(ele){
return this.listStore.indexOf(ele)
}
function clearAll(){
     this.listStore = []
     this.size = this.pos = 0
}
function findItem(ele){
    return this.listStore.indexOf(ele)
}
function display(){
    return this.listStore.toString()
}
function insertEle(ele, pos){
    this.listStore.splice(pos, 0, ele)
}
function removeEle(ele){
   let index = this.listStore.indexOf(ele)
   this.listStore.splice(index, 1)
}
function frontEle(){
    return this.listStore[0]
}
function endEle(){
    return this.listStore[this.listStore.length-1]
}
function prevEle(ele){
    let index = this.listStore.indexOf(ele)
    return this.listStore[index-1]
}
function length(){
    return this.listStore.length
}
function moveToPos(ele, pos){
    let currPos = this.find(ele)
    let item = this.listStore.splice(currPos, 1)
    this.listStore.splice(pos, 0, item)
}
function getElement(pos){
    let ele = this.listStore.slice(pos-1, pos)
    return ele.toString()
}
function contains(ele){
    for(let i = 0; i < this.listStore.length; i++){
       if(this.listStore[i] == ele) return true          
    }
    return false     
}


let myList  = new List()
myList.append(90)
myList.append(20)
myList.append(45)
myList.append(59)
myList.insert(30, 2)
myList.remove(30)


console.log(myList.display().toString())
console.log(myList.find(90))
console.log(myList.front())
console.log(myList.end())
console.log(myList.prev(45))
console.log(myList.length())
myList.moveTo(90, 2)
console.log(myList.getElement(3))
console.log(myList.contains(45))
console.log(myList.display().toString())