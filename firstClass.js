class Themostate {
  constructor(ftemp) {
    this.ctemp = (5 / 9) * (ftemp - 32);
  }
  get temperature() {
    return this.ctemp;
  }
  set temperature(ctemp) {
    return (this.ctemp = ctemp);
  }
}
const mytemp = new Themostate(100);
console.log(mytemp.temperature);
mytemp.temperature = 40;
console.log(mytemp.temperature);
