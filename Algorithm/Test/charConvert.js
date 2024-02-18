const charConvert = (s, k) => {
  return s
    .split("")
    .map((item) => {
      let result = "";
      if (/[a-z]/.test(item)) {
        let base = "a".charCodeAt();
        let ele = (item.charCodeAt() - base + k) % 26;
        result = String.fromCharCode(ele + base);
      }
      if (/[A-Z]/.test(item)) {
        let base = "A".charCodeAt();
        let getter = (item.charCodeAt() - base + k) % 26;
        result = String.fromCharCode(getter + base);
      }
      return result || item;
    })
    .join("");
};
console.log(charConvert("abmnyzzz--   -AAAMNOPQRZZZY", 5));

const charConvert1 = (s, k) => {
  let output = "";
  for (let i in s) {
    let char = s[i];

    if (/[a-zA-Z]/.test(char)) {
      //   let checker = char === char.toUpperCase();
      //   let base = checker ? "A".charCodeAt() : "a".charCodeAt();
      let base = char === char.toUpperCase() ? 65 : 97;
      let ele = (char.charCodeAt() - base + k) % 26;
      let result = String.fromCharCode(ele + base);
      output += result;
    } else {
      output += char;
    }
  }
  return output;
};
console.log(charConvert1("abmnyzzz--   -AAAMNOPQRZZZYDD", 5));

const charConvert2 = (s, k) => {
  return s
    .split("")
    .map((item) => {
      let convert = "";
      if (/[a-zA-Z]/g.test(item)) {
        let checker = item === item.toUpperCase();
        let base = checker ? 65 : 97;
        let ele = (item.charCodeAt() - base + k) % 26;
        convert = String.fromCharCode(ele + base);
      }
      return convert || item;
    })
    .join("");
};
console.log(charConvert2("abmnyzzz--   -AAAMNOPQRZZZYDD", 5));
