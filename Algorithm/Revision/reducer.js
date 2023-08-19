const users = [
  { name: "John", age: 34 },
  { name: "Amy", age: 20 },
  { name: "camperCat", age: 10 },
];

//get the list of users
const userObj = users.reduce((obj, user) => {
  obj[user.name] = user.age;
  return obj;
}, {});
console.log(userObj);

//to get the average age

const userObj1 =
  users.reduce((total, user) => {
    total += user.age;
    return total;
  }, 0) / users.filter((user) => user).length;
//user.filter((user)=> user.name).length;
//user.filter((user)=> user.age).length

console.log(userObj1);
