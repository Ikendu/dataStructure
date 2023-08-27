const convert = (num) => {
  let str = "";
  str += num;
  let lev1 = "";
  let lev2 = "";
  let lev3 = "";
  let lev4 = "";
  result = [];

  switch (str[str.length - 1]) {
    case "1":
      lev1 += "I";
      break;
    case "2":
      lev1 += "II";
      break;
    case "3":
      lev1 += "III";
      break;
    case "4":
      lev1 += "IV";
      break;
    case "5":
      lev1 += "V";
      break;
    case "6":
      lev1 += "VI";
      break;
    case "7":
      lev1 += "VII";
      break;
    case "8":
      lev1 += "VIII";
      break;
    case "9":
      lev1 += "IX";
      break;
  }
  switch (str[str.length - 2]) {
    case "1":
      lev2 += "X";
      break;
    case "2":
      lev2 += "XX";
      break;
    case "3":
      lev2 += "XXX";
      break;
    case "4":
      lev2 += "XL";
      break;
    case "5":
      lev2 += "L";
      break;
    case "6":
      lev2 += "LX";
      break;
    case "7":
      lev2 += "LXX";
      break;
    case "8":
      lev2 += "LXXX";
      break;
    case "9":
      lev2 += "XC";
      break;
  }
  switch (str[str.length - 3]) {
    case "1":
      lev3 += "C";
      break;
    case "2":
      lev3 += "CC";
      break;
    case "3":
      lev3 += "CCC";
      break;
    case "4":
      lev3 += "CD";
      break;
    case "5":
      lev3 += "D";
      break;
    case "6":
      lev3 += "DC";
      break;
    case "7":
      lev3 += "DCC";
      break;
    case "8":
      lev3 += "DCCC";
      break;
    case "9":
      lev3 += "CM";
      break;
  }
  switch (str[str.length - 4]) {
    case "1":
      lev4 += "M";
      break;
    case "2":
      lev4 += "MM";
      break;
    case "3":
      lev4 += "MMM";
      break;
  }

  //return str;
  result.push(lev4, lev3, lev2, lev1);
  return result.join("");
};
console.log(convert(3030));

//using lookup object
const convert1 = (num) => {
  let lookup = {
    1: "I",
    2: "II",
    3: "III",
    4: "IV",
    5: "V",
    6: "VI",
    7: "VII",
    8: "VIII",
    9: "IX",
    10: "X",
    20: "XX",
    30: "XXX",
    40: "XL",
    50: "L",
    60: "LX",
    70: "LXX",
    80: "LXXX",
    90: "XC",
    100: "C",
    200: "CC",
    300: "CCC",
    400: "CD",
    500: "D",
    600: "DC",
    700: "DCC",
    800: "DCCC",
    900: "MC",
    1000: "M",
    2000: "MM",
    3000: "MMM",
  };

  let result = [];

  let str = String(num).split("");
  for (let i in str) {
    let item = str[i] * Math.pow(10, str.length - i - 1);
    if (lookup[item]) {
      result.push(lookup[item]);
    }
  }
  return result.join("");
};
console.log(convert1(3567));
