// Its length is at least .
// It contains at least one digit.
// It contains at least one lowercase English character.
// It contains at least one uppercase English character.
// It contains at least one special character. The special characters are:
// !@#$%^&*()-+
// n is number of password set by user
//return the number of password need to complete the password

const checker = (n, password) => {
  let counter = 0;

  if (!/[A-Z]/g.test(password)) counter++;
  if (!/[a-z]/g.test(password)) counter++;
  if (!/[0-9]/g.test(password)) counter++;
  if (!/[^\w]/g.test(password)) counter++;

  return Math.max(counter, 6 - n);
};
console.log(checker(8, "fgfD#d4"));
