const truthCheck = (arr, item) => {
  let counter = 0;
  for (c in arr) {
    //using for-in
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
//using traditional for-loop and only Boolean checker
const itemChecker = (arr, item) => {
  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
    if (Boolean(arr[i][item])) {
      counter++;
    }
  }
  if (counter === arr.length) {
    return "The property item is found in all";
  } else {
    return "It is not complete";
  }
};
console.log(
  itemChecker(
    [
      { name: "Quincy", role: "Founder", isBot: false },
      { name: "Naomi", role: "", isBot: false },
      { name: "Camperbot", role: "Bot", isBot: true },
    ],
    "name"
  )
);

//using .every method
const checkAll = (collection, pre) => {
  return collection.every((object) => Boolean(object[pre]));
};
console.log(
  checkAll(
    [
      { name: "Quincy", role: "Founder", isBot: false },
      { name: "Naomi", role: "", isBot: false },
      { name: "Camperbot", role: "Bot", isBot: true },
    ],
    "isBot"
  )
);
