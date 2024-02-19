const fs =  require("node:fs")

console.log(`Movie Project`)

// fs.readFile(`movie_file.txt`, `utf8`, (error, data) =>{
//     if(error) console.log(error)
//     else{
//         console.log(data)
//         let list = data.split(`\n`)
//         console.log(list)

//     }
// } )
// let movies2 = fs.ReadStream(`movie_file.txt`, `utf8`)
// console.log(movies2)
let movies = fs.readFileSync(`movie_file.txt`, `utf8`).split(`\n`)
console.log(movies)

function displayList(list){
    for(let i = 0; i<list.length; i++){
        if(list[i] == Customer){
            console.log(`Name`, Customer[`name`], `Movie`, Customer[`movie`])
        }
        console.log(list[i])
    }
}
let Customer = {name: `Ikendu`, movie: `Hero makers`}

displayList(movies)

const insertLarger = (list, item) =>{
    for(let i = 0; i < list.length; i++){
        if(item > list[i]){
            list.splice(i+1, 0, item)
            return list
        }
    }
}

console.log(insertLarger([60, 90, 100,102,30, 45, ], 39))


