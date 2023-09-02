const longestStr = (s) => {
  let regex = /[a-zA-Z]+/g; //get the character only
  mystr = s.match(regex).join("");

  let counted = 0;
  let higherchar = null;

  for (let i in mystr) {
    let counter = 0;
    let char = mystr[i];
    //console.log(char);
    for (let j in mystr) {
      if (mystr[j] === char) counter++;
    }
    if (counter > counted) {
      counted = counter;
      higherchar = char;
    }
  }
  //console.log(mystr);
  return higherchar;
};
console.log(
  longestStr(
    "dhhdash4429477htbbbbbbbbbbbbbbbbbbbbbbbbbhtdhdhd474jh4j5j3jj5hgAAA%$3ASA"
  )
);
