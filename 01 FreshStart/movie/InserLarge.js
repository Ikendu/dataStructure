const insertLarge = (item, array) => {
    for(let i = 0; i < array.length; i++){
        if(array[i] > item) return `Some element are greater than ${item}`
    }
    array.push(item)
    return array
}

console.log(insertLarge(11, [10, 5, 15, 7, 12]))

console.log(insertLarge('zasd', ['abc', 'hello', 'comom', 'climb', 'opolo']))


//Person object
let enteries = []

const createEntry = (name, gender) =>{
    enteries.push({name, gender})
}
createEntry('Chibundu', 'male')
createEntry('Akuoma', 'female')
createEntry('Onyinye', 'female')
createEntry('Chekube', 'female')
createEntry('Ezeaku', 'male')

console.log(enteries)

const displayGender = (list, gender) => {
    let newList = []
    
    for(let i = 0; i < list.length; i++){
        if(list[i].gender == gender){
            newList.push(list[i])
        }
    }
    return newList
}
console.log(displayGender(enteries, 'male'))