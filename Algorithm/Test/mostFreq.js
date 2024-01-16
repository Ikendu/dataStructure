const mostfreq = (s) => {
  let regex = /[a-zA-Z]/gi;
  let getter = s.match(regex);
  let max = 0;
  let char = "";

  for (let i = 0; i < getter.length; i++) {
    let count = 0;
    for (let j = 0; j < getter.length; j++) {
      if (getter[i] === getter[j]) {
        count++;
      }
    }
    if (max < count) {
      max = count;
      char = getter[i];
    }
  }
  console.log(getter);
  return char;
};
console.log(
  mostfreq("hiuryfDDDDDhjaaaAAAAAadddddhytccccc99999999999999997867ui")
);
