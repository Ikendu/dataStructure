const Person = function (first, last) {
  let firstName = first;
  let lastName = last;

  this.getFirstName = () => {
    return firstName;
  };

  this.getLastName = () => {
    return lastName;
  };

  this.getFullName = () => {
    return `${firstName} ${lastName}`;
  };

  this.setFirstName = (first) => {
    firstName = first;
  };

  this.setLastName = (last) => {
    lastName = last;
  };

  this.setFullName = (first, last) => {
    firstName = first;
    lastName = last;
  };
};
let ebus = new Person("Bob", "Ross");

ebus.setLastName("Ebuka");
console.log(ebus.getFullName());
