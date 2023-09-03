function timeConversion(s) {
  // Write your code here
  let ap = s.split("").slice(-2).join("");
  let regex = /\d+/g;
  let time = Number(s.match(regex)[0]);
  let otherTime = s.match(regex);
  let result = "";
  if (ap === "PM" && time < 12) {
    time += 12;
  } else if (ap === "AM" && time === 12) {
    time -= 12;
  }
  result +=
    time < 10
      ? "0" + time + ":" + otherTime[1] + ":" + otherTime[2]
      : time + ":" + otherTime[1] + ":" + otherTime[2];
  return result;
}
console.log(timeConversion("01:05:45PM"));
