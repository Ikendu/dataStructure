const htmlReplace = (str) => {
  let converter = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "<>": "&lt;&gt;",
    "'": "&apos;",
  };
  return str.replace(/[&<>"']+/g, (i) => converter[i]);
};
console.log(htmlReplace("Dolce <> 'Gabbana"));
