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
    return this.listStore.push(ele)
}
function currPos(ele){
return this.listStore.indexOf(ele)
}
function clearAll(){
    return this.listStore = []
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

function frontEle(){}
function endEle(){}
function prevEle(){}
function length(){}
function moveToPos(){}
function getElement(){}
function contains(){}


let myList  = new List()
myList.append(90)
myList.append(20)
myList.append(45)
myList.append(20)
myList.insert(30, 2)
myList.remove(30)
console.log(myList.find(90))

console.log(myList.display().toString())