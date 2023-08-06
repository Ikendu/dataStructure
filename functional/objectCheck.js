const truthCheck = (arr, item) => {
  let counter = 0;
  for (c in arr) {
    if (arr[c].hasOwnProperty(item) && Boolean(arr[c][item])) {
      counter++;
    }
  }
  return counter === arr.length;
};
console.log(
  truthCheck(
    [
      { name: "Quincy", role: "Founder", isBot: false },
      { name: "Naomi", role: "", isBot: false },
      { name: "Camperbot", role: "Bot", isBot: true },
    ],
    "name"
  )
);
