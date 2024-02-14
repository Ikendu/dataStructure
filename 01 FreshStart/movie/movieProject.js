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
let movies = fs.readFileSync(`movie_file.txt`, `utf8`).split(`\n`)
console.log(movies)
// let movies2 = fs.ReadStream(`movie_file.txt`, `utf8`)
// console.log(movies2)