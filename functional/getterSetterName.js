const Identity = function (first, last) {
  let firstName = first;
  let lastName = last;

  this.getFirstName = () => {
    return firstName;
  };
  this.getLastName = () => {
    return lastName;
  };
  this.getFullName = () => {
    return this.getFirstName() + " " + this.getLastName();
  };
  this.setFirstName = (first) => {
    return (firstName = first);
  };
  this.setLastName = (last) => {
    return (lastName = last);
  };
  this.setFullName = (first, last) => {
    this.setFirstName(first);
    this.setLastName(last);
    return this.getFullName();
  };
};
let peter = new Identity("Peter", "Jake");
peter.setLastName("Ndu");
console.log(peter.getFullName());
