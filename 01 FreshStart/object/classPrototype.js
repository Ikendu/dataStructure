function Animal() {
  this.name = `New Name for animal`
  this.humanName = `Adaobi`
  this.sayName = () => console.log(this.name)
  this.sayAnimalType = () => console.log(this.animalType)
}

const animan = new Animal()
animan.sayName()

let humanName = new Animal()
Animal.prototype.sayHumanName = function () {
  console.log(this.humanName)
}
humanName.sayHumanName()

const objName = {}
objName.name = `AmGife`
objName[`age`] = 20
objName[`position`] = `Teacher`
console.log(objName)

//getters and setters
function AboutHim(name, age, heigth) {
  let hisName = name
  let hisAge = age
  let hisHeigth = heigth

  this.setName = (name) => {
    hisName = name
  }
  this.getName = () => console.log(name)
  this.setAge = (age) => {
    hisAge = age
    return hisAge
  }
  this.getAge = () => console.log(age)
  this.setHeight = (heigth) => {
    hisHeigth = heigth
  }
  this.getHeight = () => console.log(heigth)
}
let about = new AboutHim(`Gloguy`, 19, 78)
about.getAge()
about.setAge(30)
about.getAge()
