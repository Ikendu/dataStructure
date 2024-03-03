

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

function HashClass(num){
    this.table = new Array(num)

    this.insert = insert
    this.get = get
    this.hashFunc = hashFunc
    this.show = show
}