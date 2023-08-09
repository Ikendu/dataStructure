const numChecker = (str) => {
  let checker = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
  /*
        the first ()is the beginning, has a 1 and an optional space. both of them are optional
        the second () has has 3 digits with bracket or 3 digits without bracket with optional space and -
        the we have 3 digits with optional space and dash
        finally we have 4 digits and the end symbol
     */
  return checker.test(str);
  //the number is entered as a string
};
console.log(numChecker("555-555-5555"));
console.log(numChecker("1 555-555-5555"));
console.log(numChecker("5555555555"));
console.log(numChecker("0 (757) 622-7382"));
console.log(numChecker("(555)5(55?)-5555"));
