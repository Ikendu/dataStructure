//set functions

//set insertion
let myData = [20, 50, 'melt', 'felt', 'felix', 50, 30]
let myArr =  [20, 50, 90, 'melt', 'Berry', 'felix']
const insert = (data, arr) => {
    let dataStore = new Set(arr)
    if(arr.indexOf(data) < 0){
        arr.push(data)
    } else {
        return 'data already in the store'
    }
    return arr
}
// console.log(insert('heel', myData))
// console.log(insert('heel',myData ))
// console.log(insert('good', myData))

//intersection of set
const intersection = (arr1, arr2) => {
    let newArr = []
    for(let key of arr1){
        if(arr2.indexOf(key) > -1){
            newArr.push(key)
        }
    }
    return newArr
}
// console.log(intersection(myArr, myData))

//union of set
const union = (arr1, arr2) => {
    arr1 = [...new Set(arr1)]

    for(let key of arr2){
        if(arr1.indexOf(key) < 0){
            arr1.push(key)
        }
    }
    return arr1
}

console.log(union(myArr, myData))

const difference = (arr1, arr2) => {
    let newArr = []
    if(arr1.length > arr2.length){
       for(let key of arr1){
        if(arr2.indexOf(key) < 0){
            newArr.push(key)
        }
    } 
    } else {
        return "Major store is less than minor store"
    }
    
    return newArr
}
// console.log(difference(myData, myArr))

const remove = (data, arr) => {
    let index = arr.indexOf(data)
    if(index > -1){
        arr.splice(index, 1)
    }
    return arr
}
console.log('REMOVE 50', remove(50, myData))

function node(element){
    element = element
    next = null
}
let Lists = {
    element: 'head',
    next: null
}

function add(element,  List){
    let newNode = node(element)
    while(List.next != null) {
        newNode.next = List.next
        List.next = newNode
    }   
    return List
}

console.log(add('baby', Lists))