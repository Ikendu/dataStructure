const truncate = (str, num) => {
  if (str.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
};
console.log(truncate("hello how are u doing", 15));
console.log(truncate("My wife will give birth to a boy", 50));

const truncater = (str, num) => {
  return str.length > num ? str.slice(0, num) + "..." : str;
};
console.log(truncater("hello how are u doing", 15));
