const insertLarge = (item, array) => {
    for(let i = 0; i < array.length; i++){
        if(array[i] > item) return `Some element are greater than ${item}`
    }
    array.push(item)
    return array
}

console.log(insertLarge(11, [10, 5, 15, 7, 12]))

console.log(insertLarge('zasd', ['abc', 'hello', 'comom', 'climb', 'opolo']))

