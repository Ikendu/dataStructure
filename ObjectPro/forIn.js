const users = {
  Alan: { online: true },
  Jeff: { online: false },
  Gift: { online: true },
  Sarah: { online: false },
  Ryan: { online: true },
};

//check for users online
const checker = (allUsers) => {
  let numOnline = 0;
  for (let user in allUsers) {
    if (allUsers[user].online === true) {
      numOnline += 1;
    }
  }
  return numOnline;
};
console.log(checker(users));
