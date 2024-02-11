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
function appendOne(item){
    return this.listStore.push(item)
}
function currPos(ele){
return this.listStore.indexOf(ele)
}
function clearAll(){}
function findItem(){}
function display(){
    return this.listStore.toString()
}
function insertEle(){}
function removeEle(){}
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
console.log(myList.display().toString())