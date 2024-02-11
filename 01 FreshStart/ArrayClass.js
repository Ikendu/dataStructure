function ObjectArray(){
    this.array = []
    this.add = add
    this.length = length
    this.average = average
} 

function add(item){
    return this.array.push(item)
}
function length(){
    return this.array.length
}
function average(){
    let total = 0
    for(let i = 0; i<this.array.length; i++){
        total+=this.array[i]
    } 
    return total/this.array.length-1
}
let p = new ObjectArray()
p.add(90)
p.add(45)
p.add(56)
p.add(89)
p.add(57)

console.log(p.length())
console.log(p.average())