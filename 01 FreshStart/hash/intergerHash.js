

//Get random student reg number
function getRandom(max, min){
    return Math.floor(Math.random() *( max - min + 1)) + min
}

console.log(getRandom(50, 10))

function studensReg(arr){
    
    for (let i = 0; i < arr.length; i++){
        let num = ``;
        for(let i = 1; i<9; i++){
            num += Math.floor(Math.random() * 10)            
        }
        num += getRandom(99, 50)
        arr[i] = num
    }
    return arr
}
console.log(studensReg(new Array(20)))

function HashClass(){
    this.table = new Array(137)
    this.insert = insert
    // this.get = get
    this.hashFunc = hashFunc
    this.show = show
}
function hashFunc(data){
    let hash = 0
    const HB = 37

    for(let i = 0; i < data.length; i++){
        hash += HB * hash + data.charCodeAt(i)
    }
    return hash % this.table.length
}

function insert(data){
    let hashNum = this.hashFunc(data)
    //let curr = []
    
    if(this.table[hashNum]) this.table[++hashNum] = data
    else this.table[hashNum] = data 
}

function show(){
    for(let key in this.table ){
        if(this.table[key]) console.log(key+ ` ---> ` +this.table[key])
    }
}

let students = new HashClass()
students.insert(`Hector`)
students.insert(`Victor`)
students.insert(`Rector`)
students.insert(`Icon`)
students.insert(`Star`)
students.insert(`Hector`)
students.insert(`Victor`)
students.insert(`Rector`)
students.insert(`Icon`)
students.insert(`Star`)

let stuRegs = new HashClass()
let regNums = studensReg(new Array(20))

for(let i = 0; i < regNums.length; i++ ){
    stuRegs.insert(regNums[i].substring(0, 8))
}

students.show()
stuRegs.show()

