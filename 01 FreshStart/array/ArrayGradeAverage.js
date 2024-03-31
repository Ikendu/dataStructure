//a function for displaying a student’s grade average
function studentGrade(){
    this.grades = []
    this.add = add
    this.average = average
} 
function add(grade){
    return this.grades.push(grade) 
}
function average(){
    let total = 0
    for(let i = 0; i<this.grades.length; i++){
        total += this.grades[i]
    }
    return total / this.grades.length
}

let grade = new studentGrade()
grade.add(56)
grade.add(90)
grade.add(74)
grade.add(86)
grade.add(74)

console.log(grade.average())

//a function for displaying a set of string both foreword and backword

function display(arr){
    let forward = arr.join(` `)
    let backward = arr.reverse().join(` `)
    return {forward, backward}
}
console.log(display([`boy`, `girl`, `man`, `woman`, `ada`, `obi`]))
