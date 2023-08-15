const truncate = (str, num) => {
  if (str.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
};
console.log(truncate("hello how are u doing", 15));
console.log(truncate("My wife will give birth to a boy", 50));
