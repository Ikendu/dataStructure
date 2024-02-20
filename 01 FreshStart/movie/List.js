
const fs =  require("node:fs")

function List(){
    this.listSize = 0
    this.listStore = []
    this.pos = 0
    this.front = front
    this.clear = clear
    this.find = find
    this.view = view
    this.insert = insert
    this.append = append
    this.remove = remove
    this.end = end
    this.next = next
    this.prev = prev
    this.length = length
    this.currPos = currPos
    this.moveTo = moveTo
    this.getElement = getElement
    this.contains = contains
}
function front(){
    this.pos = 0
}
function clear(){
    delete this.listStore
    this.listStore = []
    this.listSize = 0
    this.pos = 0
}
function find(item){
    for(let i = 0; i < this.listStore.length; i++){
        if(this.listStore[i] == item) return i
    }
    return -1    
}
function view(){
    return this.listStore
}
function insert(item, pos){
    this.listStore.splice(pos, 0, item)
    this.listSize++
}
function append(item){
    this.listStore[this.listSize++] = item
}
function remove(item){
    let pos = this.find(item)
    if(pos > -1){
        this.listStore.splice(pos, 1)
        this.listSize--
        return true
    }
    return false
}
function end(){
    this.pos = this.listSize-1
    return this.listStore[this.listSize-1]
}
function next(){
    if(this.pos < this.listSize-1) this.pos++
}
function prev(){
    if(this.pos > 0) this.pos--
}
function length(){
    return this.listSize
}
function currPos(){
   return this.pos
}
function moveTo(position){
    this.pos = position
}
function getElement(){
    return this.listStore[this.pos]
}
function contains(item){
   let index = this.find(item)
   if(index > -1) return true
   return false
}

let newList = new List()
// newList.append(`Henry`)
// newList.append(`Ikendu`)
// newList.append(`Aku`)
// newList.insert(`Chibundu`, 1)
// console.log(newList.listSize)
// newList.end()
//newList.clear()
// console.log(newList.view())
// newList.prev()
// newList.currPos()
// console.log(newList.pos)

// console.log(newList.length())

//working on the movie list
const createFile = (file) => {
    let fileArray = fs.readFileSync(file, `utf8`).split(`\n`)
    return fileArray
}

const movies = createFile(`movie_file.txt`)
//console.log(movies)

let movieList = new List()

for(let i = 0; i < movies.length; i++){
    movieList.append(movies[i])
}
console.log(movieList.getElement())
console.log(movieList.pos)

//Display list
const viewMovieList = (file) => {
    // for(file.front(); file.currPos() < file.length(); file.next()){
    // console.log(file.getElement())
    // }
    for(let i = 0; i < file.length; i++){
        console.log(file[i])
    }
}
//viewMovieList(movies)

const viewDeepList = (file) => {
    for(let i = 0; i < file.length; i++){
        if(file[i] instanceof customer ){
            console.log(`Customer Name`, file[i].name, `Movie rented`, file[i].movie)
        } else {
            console.log(file[i])
        }

    }
}
const customer = []

const rentMovie = (name, movie, movieList, customers) => {
    
}

viewDeepList(movies)
