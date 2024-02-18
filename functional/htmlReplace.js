const replaceHtml = (str) => {
  let temp = str.split("");

  for (let i = 0; i < temp.length; i++) {
    switch (temp[i]) {
      case "&":
        temp[i] = "&amp;";
        break;
      case "<":
        temp[i] = "&lt;";
        break;
      case ">":
        temp[i] = "&gt;";
        break;
      case '"':
        temp[i] = "&guot;";
        break;
      case "'":
        temp[i] = "&apos;";
        break;
      case "<>":
        temp[i] = "&lt;&gt;";
        break;
    }
  }
  return temp.join("");
};
console.log(replaceHtml("Dolce & Gabbana"));

//using object Lookup and replace method
const convertHtml = (str) => {
  const lookUp = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;",
  };
  return str.replace(/[&<>"']/g, (match) => lookUp[match]);
};
console.log(convertHtml("Dolce > Gabbana"));

//using map function with object lookup
const htmlConvert = (str) => {
  let lookUp = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;",
  };
  return str
    .split("")
    .map((item) => lookUp[item] || item)
    .join("");
};
console.log(htmlConvert("Dolce > Gabbana"));

//using only simple for loop
const htmlreplace = (str) => {
  let items = [/&/g, /</g, />/g, /"/g, /'/g];
  let replacer = ["&mp;", "&lt;", "&gt;", "&quot;", "&apos;"];

  for (let i = 0; i < items.length; i++) {
    str = str.replace(items[i], replacer[i]);
  }
  return str;
};
console.log(htmlreplace("Dolce > Gabbana"));
//&, <, >, " (double quote), and '
/*
convertHTML("Dolce & Gabbana") should return the string Dolce &amp; Gabbana.
Waiting:convertHTML("Hamburgers < Pizza < Tacos") should return the string Hamburgers &lt; Pizza &lt; Tacos.
Waiting:convertHTML("Sixty > twelve") should return the string Sixty &gt; twelve.
Waiting:convertHTML('Stuff in "quotation marks"') should return the string Stuff in &quot;quotation marks&quot;.
Waiting:convertHTML("Schindler's List") should return the string Schindler&apos;s List.
Waiting:convertHTML("<>") should return the string &lt;&gt;.
*/
