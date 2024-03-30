function MakeTalk(name, num) {
  this.shout = shout;
  this.talk = talk;
  let speaker = name;
  let age = num;
  this.getName = function getName() {
    console.log(speaker);
  };
  this.setAge = function setAge(num) {
    age = num;
  };
  this.getAge = function getAge() {
    console.log(age);
  };
}
function shout() {
  console.log("You are shouting");
}
function talk() {
  console.log("Now you are talking");
}

let speech = new MakeTalk("Mike", 45);

MakeTalk.prototype.rapping = rapping;
MakeTalk.prototype.setName = setName;
// MakeTalk.prototype.getName = getName;

function setName(name) {
  speaker = name;
}

function rapping() {
  console.log("You are rapping your speech");
}

speech.rapping();
speech.shout();
speech.talk();
speech.getName();
speech.setName(40);
speech.getAge();
