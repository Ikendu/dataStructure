const convert = (num) => {
  let str = "";
  str += num;
  let index1 = "";
  let index2 = "";
  let index3 = "";
  let index4 = "";
  let result = [];

  if (str.length === 0) return "";
  else if (str.length > 0) {
    switch (str[str.length - 1]) {
      case "1":
        index1 = "I";
        break;
      case "2":
        index1 = "II";
        break;
      case "3":
        index1 = "III";
        break;
      case "4":
        index1 = "IV";
        break;
      case "5":
        index1 = "V";
        break;
      case "6":
        index1 = "VI";
        break;
      case "7":
        index1 = "VII";
        break;
      case "8":
        index1 = "VIII";
        break;
      case "9":
        index1 = "IX";
        break;
    }
    switch (str[str.length - 2]) {
      case "1":
        index2 = "X";
        break;
      case "2":
        index2 = "XX";
        break;
      case "3":
        index2 = "XXX";
        break;
      case "4":
        index2 = "XL";
        break;
      case "5":
        index2 = "L";
        break;
      case "6":
        index2 = "LX";
        break;
      case "7":
        index2 = "LXX";
        break;
      case "8":
        index2 = "LXXX";
        break;
      case "9":
        index2 = "XC";
        break;
    }
    switch (str[str.length - 3]) {
      case "1":
        index3 = "C";
        break;
      case "2":
        index3 = "CC";
        break;
      case "3":
        index3 = "CC";
        break;
      case "4":
        index3 = "CD";
        break;
      case "5":
        index3 = "D";
        break;
      case "6":
        index3 = "DC";
        break;
      case "7":
        index3 = "DCC";
        break;
      case "8":
        index3 = "DCCC";
        break;
      case "9":
        index3 = "CM";
        break;
    }
    switch (str[str.length - 4]) {
      case "1":
        index4 = "M";
        break;
      case "2":
        index4 = "MM";
        break;
      case "3":
        index4 = "MMM";
        break;
      case "4":
        index4 = "MV";
        break;
    }
  }

  result.push(index4, index3, index2, index1);
  return result.join("");
};
console.log(convert(2398));
